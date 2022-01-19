import { useState } from 'react';

export default function NewsletterSignUp() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <div className="px-5 mt-6 md:mt-20 md:max-w-screen-2xl md:mx-10 2xl:mx-auto">
      <form onSubmit={handleSubmit}>
        <div className="bg-gray-light p-4 rounded-lg">
          <h3 className="font-semibold">Für den Newsletter anmelden</h3>
          <p className="text-gray">Füller das loreum skdfjal dfaldjfa sldfj acon nldkaödakd.</p>

          <div className="md:flex">
            <input
              value={name}
              onChange={e => setName(e.target.value)}
              className="md:mr-4"
              type="text"
              name="name"
              id="name"
              placeholder="Dein Name"
              required
            />
          </div>
          <div className="md:flex">
            <input
              value={email}
              onChange={e => setEmail(e.target.value)}
              className="md:mr-4"
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              required
            />
          </div>
        </div>

        <button type="submit" className="mt-4 p-4 bg-secondary rounded-md">
          Anmelden
        </button>
      </form>
    </div>
  );
}
