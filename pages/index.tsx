import Head from 'next/head';
import React, { useState } from 'react';
import styles from '../styles/Home.module.css';
import Image from 'next/image';
import waSvg from '../images/WhatsApp.svg';

const WA_URL = 'https://api.whatsapp.com/send/?phone=91';

export default function Home() {
  const [phone, setPhone] = useState('');

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    if (phone.length < 10) {
      alert('Phone Number must be 10 digits');
    }
    window.open(WA_URL + phone);
  };

  const handleInput = (e: React.FocusEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (value.length > 10) return;
    setPhone(value);
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Whatsapp Direct Message</title>
        <meta
          name="description"
          content="Send messages to Whatsapp without saving a contact"
        />
        <link rel="icon" href="/icon-192x192.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta
          name="viewport"
          content="width=device-width, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
      </Head>

      <main className={styles.main}>
        <div className={styles.logo}>
          <Image src={waSvg} alt="Whatsapp" height={75} />
        </div>
        <form onSubmit={handleSubmit} className={styles.form}>
          <input
            type="number"
            value={phone}
            onChange={handleInput}
            className={styles.input}
            placeholder="XXXXXXXXXX"
            required
          />
          <button type="submit" className={styles.submit}>
            Send
          </button>
        </form>
      </main>
    </div>
  );
}
