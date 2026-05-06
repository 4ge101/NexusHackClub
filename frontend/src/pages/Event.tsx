import type { FunctionalComponent } from "preact";
import "./Footer.css";

type FooterProps = {
  username?: string;
  onReferFriend?: () => void;
  onLogout?: () => void;
};

const Footer: FunctionalComponent<FooterProps> = ({
  username = "theforgettenone2",
  onReferFriend,
  onLogout,
}) => {
  return (
    <footer class="site-footer">
      <div class="footer-pill footer-pill--nav">
        <span class="footer-label">USE</span>

        <span class="key-cluster">
          <span class="key key--w">W</span>
          <span class="key-row">
            <span class="key">A</span>
            <span class="key">S</span>
            <span class="key">D</span>
          </span>
        </span>

        <span class="footer-label">OR</span>

        <svg
          class="mouse-icon"
          viewBox="0 0 28 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="1.5"
            y="1.5"
            width="25"
            height="37"
            rx="12.5"
            stroke="#1a1a1a"
            strokeWidth="3"
          />
          <line
            x1="14"
            y1="1.5"
            x2="14"
            y2="15"
            stroke="#1a1a1a"
            strokeWidth="3"
          />
          <circle cx="14" cy="22" r="3" fill="#1a1a1a" />
        </svg>

        <span class="footer-label">TO NAVIGATE</span>
      </div>

      <div class="footer-pill footer-pill--user">
        <span class="footer-username">{username}</span>
        <button class="refer-btn" onClick={onReferFriend}>
          Refer a Friend
        </button>
        <button class="logout-btn" onClick={onLogout} aria-label="Log out">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
          >
            <path
              d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"
              stroke="#1a1a1a"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <polyline
              points="16 17 21 12 16 7"
              stroke="#1a1a1a"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <line
              x1="21"
              y1="12"
              x2="9"
              y2="12"
              stroke="#1a1a1a"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
    </footer>
  );
};

export default Footer;
