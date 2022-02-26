import { useState, useRef } from 'react';
import { postBookingRequest } from '../lib/firebase';

enum ErrorMessages {
  Email = 'Fehler: Deine Emails stimmen nicht überein.',
  Age = 'Fehler: Tut mir leid, du musst leider mindestens 18 sein.',
  FileSize = 'Fehler: Deine hochgeladenen Bilder dürfen leider maximal 10 MB groß sein.',
}

enum SendingStatus {
  notSend,
  sending,
  success,
  failed,
}

export default function BookingContact() {
  const [sendingStatus, setSendingStatus] = useState(SendingStatus.notSend);
  const [errorMessage, setErrorMessage] = useState('');
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [email, setEmail] = useState('');
  const [confirmedEmail, setConfirmedEmail] = useState('');
  const [age, setAge] = useState<number | string>('');
  const [tattooDescription, setTattooDescription] = useState('');
  const [tattooPosition, setTattooPosition] = useState('');
  const [tattooSize, setTattooSize] = useState('');
  const [upLoadedFiles, setUpLoadedFiles] = useState(null);
  const [peopleCount, setPeopleCount] = useState('nur ich');
  const [peopleCountTxt, setPeopleCountTxt] = useState('');
  const [alreadyCustomer, setAlreadyCustomer] = useState<boolean>();
  const [preferedTime, setPreferedTime] = useState('');
  const [instaName, setInstaName] = useState('');
  const [subscribeToNewsletter, setSubscribeToNewsletter] = useState(false);

  const container = useRef(null);

  async function handleSubmit(e) {
    e.preventDefault();

    let upLoadedFilesFormatted = [];

    let fileSizeTotal = 0;

    for (let i = 0; i < upLoadedFiles.length; i++) {
      upLoadedFilesFormatted.push({
        content: await toBase64(upLoadedFiles[i]),
        filename: upLoadedFiles[i].name,
        type: upLoadedFiles[i].type,
        disposition: 'attachment',
      });

      fileSizeTotal = fileSizeTotal + upLoadedFiles[i].size;
    }

    if (email !== confirmedEmail) {
      setErrorMessage(ErrorMessages.Email);
      return;
    }

    if (age < 18) {
      setErrorMessage(ErrorMessages.Age);
      return;
    }

    if (fileSizeTotal >= 10000000) {
      setErrorMessage(ErrorMessages.FileSize);
      return;
    }

    container.current.scrollIntoView();

    setSendingStatus(SendingStatus.sending);

    postBookingRequest({
      name,
      surname,
      email,
      age,
      tattooDescription,
      tattooPosition,
      tattooSize,
      peopleCount,
      peopleCountTxt,
      alreadyCustomer,
      preferedTime,
      subscribeToNewsletter,
      upLoadedFilesFormatted,
      instaName,
    })
      .then(result => {
        console.log('success');
        console.log(result);
        setSendingStatus(SendingStatus.success);
      })
      .catch(e => {
        console.log('failure');
        console.log(e);
        setSendingStatus(SendingStatus.failed);
      });
  }

  function toBase64(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        resolve(String(reader.result).replace('data:', '').replace(/^.+,/, ''));
      };
      reader.onerror = error => reject(error);
    });
  }

  if (sendingStatus === SendingStatus.sending) {
    return (
      <div className="px-5 mt-6 md:mt-20 md:max-w-screen-2xl md:mx-10 2xl:mx-auto">
        <div className="bg-gray-light p-4 rounded-lg">
          Deine Anfrage wird geschickt, hab noch einen Moment Geduld...
        </div>
      </div>
    );
  }

  if (sendingStatus === SendingStatus.success) {
    return (
      <div className="px-5 mt-6 md:mt-20 md:max-w-screen-2xl md:mx-10 2xl:mx-auto">
        <div className="bg-gray-light p-4 rounded-lg">
          Super, das hat geklappt. Danke für deine Anfrage! Ich melde mich schnellstmöglich bei dir.
          Es kann jedoch sein, dass es ein paar Tage dauert bis du eine Antwort kriegst. :)
        </div>
      </div>
    );
  }

  return (
    <div
      ref={container}
      className="px-5 mt-6 md:mt-20 md:max-w-screen-2xl md:mx-10 2xl:mx-auto"
      data-anchor-link
    >
      <form onSubmit={handleSubmit}>
        {/* Basic Information section */}
        <div className="bg-gray-light p-4 rounded-lg">
          <h3 className="font-semibold">Basic Information</h3>
          <p className="text-gray">Trage deinen Namen, dein Alter und deine E-Mail ein.</p>

          <div className="md:flex">
            <input
              value={name}
              onChange={e => setName(e.target.value)}
              className="md:mr-4"
              type="text"
              name="name"
              id="name"
              placeholder="Vorname"
              required
            />
            <input
              value={surname}
              onChange={e => setSurname(e.target.value)}
              type="text"
              name="surname"
              id="surname"
              placeholder="Nachname"
              required
            />
          </div>
          <div className="md:flex">
            <input
              value={email}
              onChange={e => setEmail(e.target.value)}
              onFocus={() => (errorMessage === ErrorMessages.Email ? setErrorMessage('') : null)}
              className={`md:mr-4 ${errorMessage === ErrorMessages.Email && 'border-red border'}`}
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              required
            />
            <input
              value={confirmedEmail}
              className={`${errorMessage === ErrorMessages.Email && 'border-red border'}`}
              onFocus={() => (errorMessage === ErrorMessages.Email ? setErrorMessage('') : null)}
              onChange={e => setConfirmedEmail(e.target.value)}
              type="email"
              name="confirmEmail"
              id="confirmEmail"
              placeholder="Email bestätigen"
              required
            />
          </div>
          <div className="md:flex">
            <input
              value={age}
              onChange={e => setAge(Number(e.target.value))}
              className={`md:mr-4 ${errorMessage === ErrorMessages.Age && 'border-red border'}`}
              onFocus={() => (errorMessage === ErrorMessages.Age ? setErrorMessage('') : null)}
              type="number"
              name="age"
              id="age"
              placeholder="Alter"
              required
            />
            <input
              value={instaName}
              onChange={e => setInstaName(e.target.value)}
              type="text"
              name="insta-name"
              id="insta-name"
              placeholder="Instagram Name (optional)"
            />
          </div>
        </div>

        {/* Tattoo descripiton section */}
        <div className="bg-gray-light mt-4 p-4 rounded-lg">
          <h3 className="font-semibold">Wie soll dein Tattoo aussehen?</h3>
          <p className="text-gray">Beschreibe deine Tattoo Idee</p>

          <textarea
            id="tattoo-description"
            name="tattoo-description"
            rows={8}
            value={tattooDescription}
            onChange={e => setTattooDescription(e.target.value)}
            placeholder="Du kannst mir hier gerne ausführlich dein Traummotiv schildern..."
            className="w-full"
            required
          />
        </div>

        {/* Tattoo position section */}
        <div className="bg-gray-light mt-4 p-4 rounded-lg">
          <h3 className="font-semibold">Wo willst du dein Tatto haben?</h3>

          <input
            value={tattooPosition}
            onChange={e => setTattooPosition(e.target.value)}
            type="text"
            name="tattoo-position"
            id="tattoo-position"
            placeholder="Schulter, Rippe, Unterarm etc."
            required
          />
        </div>

        {/* Tattoo size section */}
        <div className="bg-gray-light mt-4 p-4 rounded-lg">
          <h3 className="font-semibold">Wie groß soll dein Tattoo ungefähr sein?</h3>

          <input
            value={tattooSize}
            onChange={e => setTattooSize(e.target.value)}
            type="text"
            name="tattoo-size"
            id="tattoo-size"
            placeholder="10x10cm, 20x5cm..."
            required
          />
        </div>

        {/* Tattoo reference section */}
        <div className="bg-gray-light mt-4 p-4 rounded-lg">
          <h3 className="font-semibold">Lade Referenzbilder hoch</h3>
          <p className="text-gray">Füge bitte mindestens ein Referenzbild hinzu.</p>

          <input
            onChange={e => setUpLoadedFiles(e.target.files)}
            type="file"
            name="tattoo-reference"
            id="tattoo-reference"
            multiple
            className="px-0"
            required
          />
        </div>

        {/* Tattoo people count section */}
        <div className="bg-gray-light mt-4 p-4 rounded-lg">
          <h3 className="font-semibold">
            Sollen mehrere Personen in einer Sitzung tättowiert werden?
          </h3>
          <p className="text-gray">maximum 3 Personen</p>

          <div className="flex flex-col mt-2">
            <label>
              <input
                value={'nur ich'}
                onChange={e => setPeopleCount(e.target.value)}
                type="radio"
                name="people-count"
                id="people-count"
                className="w-auto mr-2"
                required
              />
              Nur Ich
            </label>
            <label className="flex mt-2">
              <input
                value={peopleCountTxt}
                onChange={e => setPeopleCount(e.target.value)}
                type="radio"
                name="people-count"
                id="people-count"
                className="w-auto mr-2"
              />
              <input
                value={peopleCountTxt}
                onChange={e => setPeopleCountTxt(e.target.value)}
                type="text"
                name="people-count"
                id="people-count"
                placeholder="Folgende Personen sollen tättowiert werden...."
                className="w-auto flex-1 mt-0"
              />
            </label>
          </div>
        </div>

        {/* prefered time section */}
        <div className="bg-gray-light mt-4 p-4 rounded-lg">
          <h3 className="font-semibold">Wie sieht es zeitlich bei dir aus?</h3>

          <div className="flex mt-2 flex-col">
            <label className="mr-4 mb-2">
              <input
                value="flexibel"
                onChange={e => setPreferedTime(e.target.value)}
                type="radio"
                name="prefered-time"
                id="prefered-time"
                className="w-auto mr-2"
                required
              />
              Ich bin flexibel
            </label>
            <label>
              <input
                value="nur nachmittags"
                onChange={e => setPreferedTime(e.target.value)}
                type="radio"
                name="prefered-time"
                id="prefered-time"
                className="w-auto mr-2"
              />
              Ich kann nur Nachmittags
            </label>
          </div>
        </div>

        {/* already tattooed section */}
        <div className="bg-gray-light mt-4 p-4 rounded-lg">
          <h3 className="font-semibold">Bist du schonmal bei mir gewesen?</h3>

          <div className="flex mt-2 items-center">
            <label className="mr-4">
              <input
                onChange={() => setAlreadyCustomer(true)}
                type="radio"
                name="already-customer"
                id="already-customer"
                className="w-auto mr-2"
                required
              />
              Ja
            </label>
            <label className="ml-4">
              <input
                onChange={() => setAlreadyCustomer(false)}
                type="radio"
                name="already-customer"
                id="already-customer"
                className="w-auto mr-2"
              />
              Nein
            </label>
          </div>
        </div>

        <div className="mt-4">
          <label>
            <input
              onChange={() => setSubscribeToNewsletter(oldValue => !oldValue)}
              checked={subscribeToNewsletter}
              type="checkbox"
              name="subscribe"
              id="subscribe"
              className="w-auto mr-4"
            />
            Ich möchte den Newsletter abonnieren
          </label>
        </div>

        {errorMessage && <div className="mt-4 text-red">{errorMessage}</div>}

        <button type="submit" className="mt-4 p-4 bg-secondary rounded-md">
          Abschicken
        </button>
      </form>
    </div>
  );
}
