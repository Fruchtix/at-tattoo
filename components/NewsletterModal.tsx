import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';

export default function NewsletterModal({ closeModal }) {
  const [mounted, setMounted] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
  }

  useEffect(() => {
    setMounted(true);
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = 'auto';
      setMounted(false);
    };
  }, []);

  return mounted
    ? createPortal(
        <div className="fixed bg-semi-transparent top-0 left-0 right-0 bottom-0 px-5 z-50 flex items-center justify-center">
          <form onSubmit={handleSubmit}>
            <div className="bg-gray-light p-4 rounded-lg relative md:max-w-screen-2xl md:mx-10 2xl:mx-auto">
              <div className="absolute right-0 top-0 p-2 cursor-pointer" onClick={closeModal}>
                &#10006;
              </div>
              <h3 className="font-semibold">Für den Newsletter anmelden</h3>
              <p className="text-gray">Füller das loreum skdfjal dfaldjfa sldfj acon nldkaödakd.</p>

              <div className="md:flex">
                <input
                  value={name}
                  onChange={e => setName(e.target.value)}
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
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email"
                  required
                />
              </div>

              <button type="submit" className="mt-4 p-4 bg-secondary rounded-md">
                Anmelden
              </button>
            </div>
          </form>
        </div>,
        document.querySelector('#newsletter-portal')
      )
    : null;
}
