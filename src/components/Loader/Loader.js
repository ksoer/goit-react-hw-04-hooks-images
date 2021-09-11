import Loader from 'react-loader-spinner';
import st from '../styles.module.css';

export default function Preloader() {
  return (
    <div className={st.Button}>
      <Loader type="ThreeDots" color="#00BFFF" height={80} width={80} />
    </div>
  );
}