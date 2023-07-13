const Footer = () => {
  return (
    <div className="flex-col py-10 flex space-y-2 items-center gap-2">
      <svg
        className="w-10 h-10"
        viewBox="0 0 155 45"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1.23425 11.4706C2.95888 22.4268 8.74485 52.6144 13.2726 42.4896C16.2053 35.9319 19.7278 29.4742 22.5201 22.9103C26.2267 14.1975 25.6547 22.1938 28.052 27.9103C28.7813 29.6493 34.7482 43.5469 37.0669 36.421C39.6151 28.5898 41.3825 20.9744 47.1616 14.804C51.8581 9.78936 55.4994 19.0694 57.6274 22.4452C63.7019 32.0819 63.3756 29.3529 66.3876 19.3887C67.2051 16.684 74.08 -0.121181 74.4445 0.739637C76.1767 4.83043 77.0939 10.2234 77.8279 14.5769C78.448 18.254 82.5655 42.7245 84.6722 28.9126C85.8721 21.0458 93.565 -1.08979 93.8255 6.86372C93.998 12.1324 91.156 28.7049 97.8623 30.906C101.409 32.07 106.387 27.7962 109.358 26.4984C116.981 23.1681 125.175 20.0126 133.313 18.2148C136.06 17.6079 154.712 17.6977 154.167 12.3122C153.729 7.98598 145.55 -2.07876 143.978 6.12724C142.839 12.072 141.897 17.9113 139.891 23.6523C139.732 24.1086 136.304 33.8258 136.37 33.8296C140.247 34.051 151.87 17.6529 153.037 13.464"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
        ></path>
      </svg>

      <div className="gap-2 flex items-center">
        <span className="font-normal font-sans text-slate-500">
          {" "}
          curated by
        </span>
        <a
          className="font-bold font-sans bg-gradient-to-r  from-slate-200 via-slate-100 to-slate-400 text-black p-1 rounded-lg"
          href="https://ted2xmen.dev/?ref=bookmarksfor-dev"
          target="_blank"
          rel="noopener"
        >
          Ted2xmen
        </a>
      </div>
    </div>
  );
};

export default Footer;
