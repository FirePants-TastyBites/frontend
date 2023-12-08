import { NavLink } from "react-router-dom";
import styles from "./Footer.module.scss";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <section className={styles.socialLinks}>
          <a
            href="https://www.pinterest.com"
            aria-label="Pinterest"
            className={styles.socialLink}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
            >
              <path
                d="M11.3227 25.5883C11.3533 25.1403 11.4173 24.6937 11.5133 24.2537C11.5973 23.8603 11.852 22.747 12.2253 21.1337L12.2347 21.0937L12.7507 18.8697C12.856 18.4163 12.9373 18.0643 12.992 17.947C12.7331 17.3484 12.604 16.7018 12.6133 16.0497C12.6133 14.267 13.6213 12.8857 14.928 12.8857C15.408 12.8777 15.8667 13.0857 16.184 13.4537C16.5013 13.8217 16.648 14.311 16.5867 14.7817C16.5867 15.3857 16.4733 15.8457 15.9813 17.495C15.9053 17.748 15.832 18.0018 15.7613 18.2563C15.6933 18.507 15.6347 18.7337 15.5853 18.9523C15.4573 19.467 15.5747 20.015 15.9013 20.4257C16.0597 20.6273 16.2643 20.7878 16.4977 20.8939C16.7311 20.9999 16.9866 21.0483 17.2427 21.035C19.232 21.035 20.7093 18.3883 20.7093 14.971C20.7093 12.3443 18.9893 10.6057 16.1333 10.6057C15.4184 10.5791 14.7057 10.7012 14.0404 10.9642C13.375 11.2272 12.7715 11.6254 12.268 12.1337C11.7537 12.653 11.3479 13.2696 11.0744 13.9474C10.8008 14.6253 10.6649 15.3508 10.6747 16.0817C10.6415 16.8693 10.8828 17.6441 11.3573 18.2737C11.5987 18.4603 11.6907 18.7843 11.5907 19.0603C11.536 19.2843 11.404 19.7963 11.3547 19.967C11.3407 20.0505 11.3075 20.1296 11.2578 20.1981C11.208 20.2666 11.1431 20.3226 11.068 20.3617C10.9951 20.3999 10.9141 20.4203 10.8318 20.421C10.7495 20.4217 10.6682 20.4027 10.5947 20.3657C9.04799 19.727 8.19999 17.995 8.19999 15.779C8.19999 11.799 11.5213 8.33366 16.456 8.33366C20.636 8.33366 23.764 11.439 23.764 15.187C23.764 19.8963 21.188 23.3257 17.5107 23.3257C16.9876 23.3408 16.4683 23.233 15.9945 23.011C15.5207 22.7889 15.1056 22.4587 14.7827 22.047L14.7253 22.283L14.4493 23.419L14.4467 23.4297C14.252 24.2297 14.116 24.7857 14.0627 24.9937C13.9213 25.467 13.7427 25.931 13.5293 26.3803C16.1824 27.0126 18.9769 26.6046 21.3384 25.2402C23.7 23.8757 25.4492 21.6585 26.2265 19.0443C27.0038 16.43 26.7501 13.6173 25.5177 11.1843C24.2853 8.75122 22.1677 6.88269 19.6001 5.96272C17.0326 5.04275 14.2102 5.14124 11.713 6.23793C9.21587 7.33463 7.23366 9.34621 6.17381 11.8592C5.11397 14.3723 5.05701 17.1958 6.01464 19.7495C6.97228 22.3033 8.87175 24.3918 11.3227 25.5883ZM16 29.3337C8.63599 29.3337 2.66666 23.3643 2.66666 16.0003C2.66666 8.63633 8.63599 2.66699 16 2.66699C23.364 2.66699 29.3333 8.63633 29.3333 16.0003C29.3333 23.3643 23.364 29.3337 16 29.3337Z"
                fill="white"
              />
            </svg>
          </a>
          <a
            href="https://www.instagram.com"
            aria-label="Instagram"
            className={styles.socialLink}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
            >
              <path
                d="M16.0013 12.0003C14.9405 12.0003 13.9231 12.4218 13.1729 13.1719C12.4228 13.922 12.0013 14.9395 12.0013 16.0003C12.0013 17.0612 12.4228 18.0786 13.1729 18.8288C13.9231 19.5789 14.9405 20.0003 16.0013 20.0003C17.0622 20.0003 18.0796 19.5789 18.8298 18.8288C19.5799 18.0786 20.0013 17.0612 20.0013 16.0003C20.0013 14.9395 19.5799 13.922 18.8298 13.1719C18.0796 12.4218 17.0622 12.0003 16.0013 12.0003ZM16.0013 9.33366C17.7694 9.33366 19.4651 10.036 20.7154 11.2863C21.9656 12.5365 22.668 14.2322 22.668 16.0003C22.668 17.7684 21.9656 19.4641 20.7154 20.7144C19.4651 21.9646 17.7694 22.667 16.0013 22.667C14.2332 22.667 12.5375 21.9646 11.2873 20.7144C10.037 19.4641 9.33467 17.7684 9.33467 16.0003C9.33467 14.2322 10.037 12.5365 11.2873 11.2863C12.5375 10.036 14.2332 9.33366 16.0013 9.33366ZM24.668 9.00033C24.668 9.44235 24.4924 9.86628 24.1798 10.1788C23.8673 10.4914 23.4434 10.667 23.0013 10.667C22.5593 10.667 22.1354 10.4914 21.8228 10.1788C21.5103 9.86628 21.3347 9.44235 21.3347 9.00033C21.3347 8.5583 21.5103 8.13437 21.8228 7.82181C22.1354 7.50925 22.5593 7.33366 23.0013 7.33366C23.4434 7.33366 23.8673 7.50925 24.1798 7.82181C24.4924 8.13437 24.668 8.5583 24.668 9.00033ZM16.0013 5.33366C12.7027 5.33366 12.164 5.34299 10.6293 5.41099C9.584 5.46033 8.88267 5.60033 8.232 5.85366C7.68749 6.05358 7.19522 6.37401 6.792 6.79099C6.37467 7.19419 6.0538 7.68644 5.85333 8.23099C5.6 8.88433 5.46 9.58433 5.412 10.6283C5.34267 12.1003 5.33333 12.615 5.33333 16.0003C5.33333 19.3003 5.34267 19.8377 5.41067 21.3723C5.46 22.4163 5.6 23.119 5.852 23.7683C6.07867 24.3483 6.34533 24.7657 6.788 25.2083C7.23733 25.6563 7.65467 25.9243 8.228 26.1457C8.88667 26.4003 9.588 26.5417 10.628 26.5897C12.1 26.659 12.6147 26.667 16 26.667C19.3 26.667 19.8373 26.6577 21.372 26.5897C22.4147 26.5403 23.116 26.4003 23.768 26.1483C24.312 25.9474 24.8041 25.6271 25.208 25.211C25.6573 24.763 25.9253 24.3457 26.1467 23.771C26.4 23.115 26.5413 22.4137 26.5893 21.371C26.6587 19.9003 26.6667 19.3843 26.6667 16.0003C26.6667 12.7017 26.6573 12.163 26.5893 10.6283C26.54 9.58566 26.3987 8.88166 26.1467 8.23099C25.9457 7.68701 25.6254 7.19497 25.2093 6.79099C24.8063 6.37345 24.314 6.05255 23.7693 5.85233C23.116 5.59899 22.4147 5.45899 21.372 5.41099C19.9013 5.34166 19.388 5.33366 16.0013 5.33366ZM16.0013 2.66699C19.624 2.66699 20.076 2.68033 21.4987 2.74699C22.9173 2.81366 23.8853 3.03633 24.7347 3.36699C25.6147 3.70566 26.356 4.16433 27.0973 4.90433C27.7753 5.57085 28.2999 6.37711 28.6347 7.26699C28.964 8.11632 29.188 9.08432 29.2547 10.5043C29.3173 11.9257 29.3347 12.3777 29.3347 16.0003C29.3347 19.623 29.3213 20.075 29.2547 21.4963C29.188 22.9163 28.964 23.883 28.6347 24.7337C28.3009 25.624 27.7761 26.4305 27.0973 27.0963C26.4306 27.7741 25.6244 28.2987 24.7347 28.6337C23.8853 28.963 22.9173 29.187 21.4987 29.2537C20.076 29.3163 19.624 29.3337 16.0013 29.3337C12.3787 29.3337 11.9267 29.3203 10.504 29.2537C9.08533 29.187 8.11867 28.963 7.268 28.6337C6.37777 28.2996 5.57137 27.7749 4.90533 27.0963C4.22724 26.4299 3.70261 25.6236 3.368 24.7337C3.03733 23.8843 2.81467 22.9163 2.748 21.4963C2.684 20.075 2.668 19.623 2.668 16.0003C2.668 12.3777 2.68133 11.9257 2.748 10.5043C2.81467 9.08299 3.03733 8.11766 3.368 7.26699C3.70165 6.37656 4.2264 5.57009 4.90533 4.90433C5.57156 4.22597 6.3779 3.7013 7.268 3.36699C8.11733 3.03633 9.084 2.81366 10.504 2.74699C11.9267 2.68433 12.3787 2.66699 16.0013 2.66699Z"
                fill="white"
              />
            </svg>
          </a>
          <a
            href="https://www.facebook.com"
            aria-label="Facebook"
            className={styles.socialLink}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
            >
              <g clipPath="url(#clip0_287_697)">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M5.33332 16.0003C5.33351 13.9476 5.92601 11.9385 7.03971 10.2142C8.15341 8.48982 9.741 7.12345 11.612 6.27901C13.483 5.43457 15.5579 5.14793 17.5878 5.45349C19.6176 5.75905 21.5162 6.64382 23.0557 8.00165C24.5952 9.35947 25.7102 11.1327 26.2669 13.1085C26.8236 15.0843 26.7984 17.1787 26.1943 19.1406C25.5901 21.1024 24.4328 22.8482 22.861 24.1686C21.2893 25.4889 19.37 26.3277 17.3333 26.5843V18.667H20C20.3536 18.667 20.6927 18.5265 20.9428 18.2765C21.1928 18.0264 21.3333 17.6873 21.3333 17.3337C21.3333 16.98 21.1928 16.6409 20.9428 16.3908C20.6927 16.1408 20.3536 16.0003 20 16.0003H17.3333V13.3337C17.3333 12.98 17.4738 12.6409 17.7238 12.3908C17.9739 12.1408 18.313 12.0003 18.6667 12.0003H19.3333C19.6869 12.0003 20.0261 11.8598 20.2761 11.6098C20.5262 11.3598 20.6667 11.0206 20.6667 10.667C20.6667 10.3134 20.5262 9.97423 20.2761 9.72418C20.0261 9.47413 19.6869 9.33366 19.3333 9.33366H18.6667C17.6058 9.33366 16.5884 9.75509 15.8382 10.5052C15.0881 11.2554 14.6667 12.2728 14.6667 13.3337V16.0003H12C11.6464 16.0003 11.3072 16.1408 11.0572 16.3908C10.8071 16.6409 10.6667 16.98 10.6667 17.3337C10.6667 17.6873 10.8071 18.0264 11.0572 18.2765C11.3072 18.5265 11.6464 18.667 12 18.667H14.6667V26.5843C12.0889 26.2593 9.71842 25.0047 7.99999 23.056C6.28157 21.1073 5.33337 18.5985 5.33332 16.0003ZM16 29.3337C23.364 29.3337 29.3333 23.3643 29.3333 16.0003C29.3333 8.63633 23.364 2.66699 16 2.66699C8.63599 2.66699 2.66666 8.63633 2.66666 16.0003C2.66666 23.3643 8.63599 29.3337 16 29.3337Z"
                  fill="white"
                />
              </g>
              <defs>
                <clipPath id="clip0_287_697">
                  <rect width="32" height="32" fill="white" />
                </clipPath>
              </defs>
            </svg>{" "}
          </a>
        </section>
        <h1 className={styles.logo}>TASTY BITES</h1>
        <nav className={styles.footerNav}>
          <NavLink to={"/sign-in"} className={styles.navLink}>
            Sign In
          </NavLink>
          <NavLink to={"/menu"} className={styles.navLink}>
            Menu
          </NavLink>
          <NavLink to={"/about"} className={styles.navLink}>
            About Us
          </NavLink>
        </nav>
        <NavLink to={"#top"} className={styles.toTop}>Take me to the top</NavLink>
      </div>
    </footer>
  );
}

export default Footer;
