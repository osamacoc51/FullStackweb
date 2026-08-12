import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faHeart} from '@fortawesome/free-solid-svg-icons';
import './footer.css';

export default function Footer() {
    return (
        <footer className="footer">
            Built with <FontAwesomeIcon icon={faHeart} className="footer-icon" aria-hidden="true" /> by <a href="https://www.linkedin.com/in/osamamd496" target="_blank" rel="noopener noreferrer">Md Osama</a>
        </footer>
    )
}