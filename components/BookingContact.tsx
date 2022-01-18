import { useState } from 'react';

enum ErrorMessages {
  Email = 'Fehler: Deine Emails stimmen nicht überein',
}

export default function BookingContact() {
  const [errorMessage, setErrorMessage] = useState('');
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [email, setEmail] = useState('');
  const [confirmedEmail, setConfirmedEmail] = useState('');
  const [age, setAge] = useState<number>(null);

  function handleSubmit(e) {
    e.preventDefault();
    console.log('submit');
    console.log(name);
    console.log(surname);
    console.log(email);
    console.log(confirmedEmail);
    console.log(age);

    if (email !== confirmedEmail) {
      setErrorMessage(ErrorMessages.Email);
      return;
    }
  }

  return (
    <div className="px-5 mt-6 md:mt-20 md:max-w-screen-2xl md:mx-10 2xl:mx-auto">
      <form onSubmit={handleSubmit}>
        <div className="bg-gray-light p-4 rounded-lg">
          <h3 className="font-semibold">Basic Information</h3>
          <p className="text-gray">Füller das loreum skdfjal dfaldjfa sldfj acon nldkaödakd.</p>

          <div>
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
                className="md:mr-4"
                type="number"
                name="age"
                id="age"
                placeholder="Alter"
                required
              />
              <div className="w-full"></div>
            </div>
          </div>
        </div>

        {errorMessage && <div className="mt-4 text-red">{errorMessage}</div>}
        <button type="submit" className="mt-4 p-4 bg-secondary rounded-md">
          Abschicken
        </button>
      </form>
    </div>
  );
}
