import React from 'react';
import ChuckImage from './Chuck_Norris.jpg';

const WitamyNaStronie = () => {
  const styles = {
    witamyNaStronie: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#f5f5f5',
      padding: '20px',
      color: 'red',
      fontFamily: 'Wide Latin',
    },
    tytul: {
      fontSize: '35px',
      textAlign: 'center',
      marginTop: '0',
    },
    zdjecie: {
      width: '100%',
      height: 'auto',
      marginTop: '20px',
    },
  };

  return (
    <div style={styles.witamyNaStronie}>
      <h1 style={styles.tytul}>Witamy na stronie</h1>
      <img style={styles.zdjecie} src={ChuckImage} alt="Mercedes" />
    </div>
  );
};

export default WitamyNaStronie;
