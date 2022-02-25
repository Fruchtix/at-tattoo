import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { addUserToNewsletter } from '../lib/firebase';

enum SendingStatus {
  notSend,
  sending,
  success,
  failed,
}

export default function NewsletterModal({ closeModal }) {
  const [mounted, setMounted] = useState(false);
  const [sendingStatus, setSendingStatus] = useState(SendingStatus.notSend);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  function handleSubmit(e) {
    e.preventDefault();

    setSendingStatus(SendingStatus.sending);

    addUserToNewsletter({ name, email })
      .then(() => {
        setSendingStatus(SendingStatus.success);
      })
      .catch(() => {
        console.log('error');
      });
  }

  useEffect(() => {
    setMounted(true);
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = 'auto';
      setMounted(false);
    };
  }, []);

  if (!mounted) return null;

  let innerContent;

  if (sendingStatus === SendingStatus.sending) {
    innerContent = (
      <>
        <h3 className="font-semibold">Lädt...</h3>
        <p className="text-gray">Einen Moment noch, du wirst gerade zum Newsletter hinzugefügt.</p>
      </>
    );
  }

  if (sendingStatus === SendingStatus.success) {
    innerContent = (
      <>
        <h3 className="font-semibold">Cool, das hat geklappt</h3>
        <p className="text-gray">Dank dir! Sobald es Neuigkeiten gibt, melde ich mich.</p>
      </>
    );
  }

  if (sendingStatus === SendingStatus.notSend) {
    innerContent = (
      <>
        <h3 className="font-semibold">Für den Newsletter anmelden</h3>
        <p className="text-gray">
          Fülle das Formular bitte aus. Keine Angst, ich werde dich nicht zu spammen.
        </p>

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
      </>
    );
  }

  return createPortal(
    <div className="fixed bg-semi-transparent top-0 left-0 right-0 bottom-0 px-5 z-50 flex items-center justify-center">
      <form onSubmit={handleSubmit}>
        <div className="bg-gray-light p-4 rounded-lg relative md:max-w-screen-2xl md:mx-10 2xl:mx-auto">
          <div className="absolute right-0 top-0 p-2 cursor-pointer" onClick={closeModal}>
            &#10006;
          </div>

          {innerContent}
        </div>
      </form>
    </div>,
    document.querySelector('#newsletter-portal')
  );
}
