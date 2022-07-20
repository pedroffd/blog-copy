import { AppConfig } from '../utils/AppConfig';

const FooterCopyright = () => (
    <div className="footer-copyright">
    © Direitos pertencentes a {new Date().getFullYear()} {AppConfig.title}. Powered with{' '}
    <style jsx>
      {`
        .footer-copyright :global(a) {
          @apply text-primary-500;
        }

        .footer-copyright :global(a:hover) {
          @apply underline;
        }
      `}
    </style>
  </div>
);

export { FooterCopyright };
