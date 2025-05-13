import { Link, useLocation } from 'react-router-dom';
import css from './GoBackBtn.module.css';
import { useRef } from 'react';
import { IoArrowBack } from 'react-icons/io5';
  
const GoBackBtn = () => {
  const location = useLocation();

  const backLink = useRef(location.state ?? "/");
  

  return (
    <Link className={css.link} to={backLink.current}>
        <IoArrowBack size={20} />
      GoBackBtn
    </Link>
  );
};

export default GoBackBtn;
