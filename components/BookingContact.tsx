import { useState } from 'react';

enum ErrorMessages {
  Email = 'Fehler: Deine Emails stimmen nicht überein.',
  Age = 'Fehler: Tut mir leid, du musst leider mindestens 18 sein.',
}

export default function BookingContact() {
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
  const [subscribeToNewsletter, setSubscribeToNewsletter] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    console.log('submit');
    console.log(name);
    console.log(surname);
    console.log(email);
    console.log(confirmedEmail);
    console.log(age);
    console.log(tattooDescription);
    console.log(tattooPosition);
    console.log(tattooSize);
    console.log(upLoadedFiles);
    console.log(peopleCount);
    console.log(peopleCountTxt);
    console.log(alreadyCustomer);
    console.log(subscribeToNewsletter);
    console.log(preferedTime);

    if (email !== confirmedEmail) {
      setErrorMessage(ErrorMessages.Email);
      return;
    }

    if (age < 18) {
      setErrorMessage(ErrorMessages.Age);
      return;
    }
  }

  return (
    <div className="px-5 mt-6 md:mt-20 md:max-w-screen-2xl md:mx-10 2xl:mx-auto">
      <form onSubmit={handleSubmit}>
        {/* Basic Information section */}
        <div className="bg-gray-light p-4 rounded-lg">
          <h3 className="font-semibold">Basic Information</h3>
          <p className="text-gray">Füller das loreum skdfjal dfaldjfa sldfj acon nldkaödakd.</p>

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
            <div className="w-full my-2 p-2 rounded-lg border border-transparent hidden md:block"></div>
          </div>
        </div>

        {/* Tattoo descripiton section */}
        <div className="bg-gray-light mt-4 p-4 rounded-lg">
          <h3 className="font-semibold">Wie soll dein Tattoo aussehen?</h3>
          <p className="text-gray">Beschreibe bitte ausführlich was du haben haben willst</p>

          <textarea
            id="tattoo-description"
            name="tattoo-description"
            rows={8}
            value={tattooDescription}
            onChange={e => setTattooDescription(e.target.value)}
            placeholder="hier könntest du sowas schreiben wie “lorum ipsum dolurum ist the ksilled and then zu gucken bei the game that is zum beispiel etwas aber then for the door will be addressed”..."
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
          <h3 className="font-semibold">Wie größ soll dein Tattoo ungefähr sein?</h3>

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
            Sollen mehrere Personen in einer Sitzung tatowiert werden?
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
                placeholder="Folgende Personen sollen tatowieert werdern...."
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
            Ich möchte den Newsletter abonieren
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
