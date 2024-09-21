import React from "react";
interface Props {
  className?: string;
  color: boolean;
}

export default function NodeJsIcon({ className, color }: Props) {
  return (
    <svg viewBox="0 0 128 128" className={className}>
      <path
        fill={`${color ? '#5fa04e': '#fef08a'}`}
        d="M86.072 24.664a.71.71 0 0 0-.351.09.755.755 0 0 0-.375.637v18.93a.564.564 0 0 1-.264.464.549.549 0 0 1-.52 0l-3.066-1.773a1.486 1.486 0 0 0-1.478 0L67.75 50.146a1.48 1.48 0 0 0-.754 1.28v14.238c0 .524.291 1.021.754 1.283l12.27 7.135a1.486 1.486 0 0 0 1.476 0l12.27-7.135c.463-.262.754-.759.754-1.283V30.168c0-.553-.291-1.05-.754-1.31l-7.32-4.104a.836.836 0 0 0-.374-.09zM13.686 42.43c-.23 0-.461.086-.663.2L.753 49.739A1.493 1.493 0 0 0 0 51.047l.03 19.101c0 .263.142.526.374.643a.656.656 0 0 0 .725 0l7.295-4.193a1.48 1.48 0 0 0 .75-1.282v-8.939c0-.524.29-1.021.754-1.283l3.095-1.805a1.39 1.39 0 0 1 .752-.203c.26 0 .522.057.725.203l3.096 1.805c.463.262.754.759.754 1.283v8.94c0 .522.288 1.02.75 1.28l7.236 4.194a.704.704 0 0 0 .752 0 .724.724 0 0 0 .377-.643V51.047c0-.524-.29-1.02-.754-1.283L14.47 42.63a1.763 1.763 0 0 0-.664-.201h-.121zm100.67.207v.002l-.002.002c-.253 0-.505.065-.737.197l-12.271 7.13c-.463.264-.75.759-.75 1.284v14.24c0 .524.287 1.02.75 1.281l12.183 6.989a1.43 1.43 0 0 0 1.448 0l7.38-4.133a.724.724 0 0 0 .375-.643.724.724 0 0 0-.375-.64L110.03 61.21a.76.76 0 0 1-.375-.645V56.11a.72.72 0 0 1 .375-.638l3.854-2.213a.705.705 0 0 1 .752 0l3.845 2.213a.762.762 0 0 1 .377.638v3.494c0 .263.144.525.375.641a.704.704 0 0 0 .754 0l7.291-4.28a1.46 1.46 0 0 0 .727-1.28V51.22c0-.524-.292-1.019-.727-1.282l-12.181-7.101a1.499 1.499 0 0 0-.74-.201zm-67.043.049a1.374 1.374 0 0 0-.682.183l-12.17 7.067 4.258 7.81L47.457 42.7a2 2 0 0 0-.143-.013h-.002zm.566.148 8.607 14.814 4.045-7.445a1.34 1.34 0 0 0-.25-.201l-6.271-3.643-6.037-3.488c-.03-.015-.063-.025-.094-.037zm-.25.06-8.774 15.104 8.702 15.965c.024-.005.048-.007.072-.014l8.719-16.047-8.72-15.007zm-13.377 7.172a1.35 1.35 0 0 0-.576 1.123V65.49c0 .228.062.45.168.647l4.728-8.143-4.32-7.928zm26.45.342-4.071 7.49 4.318 7.434V51.189c0-.28-.092-.553-.248-.78zm20.056 2.865c.065 0 .13.015.19.045l4.193 2.448c.116.058.175.201.175.318v4.893c0 .146-.06.264-.175.322l-4.196 2.445a.431.431 0 0 1-.377 0l-4.195-2.443c-.116-.058-.176-.205-.176-.322v-4.893c0-.146.061-.261.176-.32l4.195-2.448a.425.425 0 0 1 .19-.045zm33.555 1.98a.26.26 0 0 0-.145.046l-2.346 1.369a.3.3 0 0 0-.142.26v2.74c0 .116.055.204.142.262l2.346 1.369a.262.262 0 0 0 .289 0l2.344-1.37a.308.308 0 0 0 .144-.261V56.93a.303.303 0 0 0-.144-.26l-2.344-1.371a.26.26 0 0 0-.144-.043v-.002zm-57.819 2.9-8.512 15.665.014-.007 12.287-7.137c.343-.194.563-.526.637-.903l-4.426-7.619zm-17.783.095-4.715 8.117c.1.123.217.23.35.31L46.5 73.737l.13.075h.003a1.377 1.377 0 0 0 .3.126c.031.01.062.015.092.022.06.013.118.022.178.027.029.003.057.002.086.002l-8.578-15.74zm24.51 13.393c-.427 0-.853.1-1.215.304l-11.55 6.73A2.457 2.457 0 0 0 49.24 80.8v13.42c0 .874.463 1.689 1.215 2.127l3.041 1.746c1.475.728 1.995.724 2.66.724 2.17 0 3.416-1.338 3.416-3.638V81.936a.356.356 0 0 0-.345-.352h-1.475a.356.356 0 0 0-.352.352v13.248c0 1.019-1.066 2.039-2.773 1.166l-3.156-1.834c-.116-.058-.174-.207-.174-.323V80.768c0-.116.058-.263.174-.32l11.545-6.696c.087-.058.232-.058.35 0l11.544 6.695c.115.06.176.176.176.32v13.424c0 .145-.06.265-.176.323l-11.547 6.726c-.087.058-.232.058-.35 0l-2.949-1.777c-.088-.058-.204-.086-.29-.03-.81.468-.953.528-1.735.79-.174.058-.463.172.115.492l3.852 2.303c.376.203.78.318 1.215.318.434 0 .866-.115 1.213-.26L75.98 96.35a2.463 2.463 0 0 0 1.215-2.13V80.8c0-.874-.463-1.686-1.215-2.123l-11.546-6.73a2.488 2.488 0 0 0-1.213-.305zm18.027 6.129a2.236 2.236 0 0 0-2.227 2.244 2.236 2.236 0 0 0 2.227 2.242c1.217 0 2.23-1.02 2.23-2.242a2.254 2.254 0 0 0-2.23-2.243v-.001zm-.03.376h.003a1.86 1.86 0 0 1 1.883 1.868c0 1.02-.841 1.89-1.883 1.89-1.012 0-1.854-.842-1.854-1.89s.87-1.866 1.852-1.868zm-.81.614v2.56h.494v-1.013h.438c.174 0 .23.058.26.203 0 .03.086.669.086.785h.52c-.06-.116-.087-.468-.116-.672-.028-.32-.056-.551-.404-.58.174-.059.46-.145.46-.611 0-.67-.58-.67-.869-.67l-.869-.002zm.438.408h.402c.146 0 .379 0 .379.35 0 .116-.059.35-.379.35h-.402v-.7zm-14.469 2.01c-3.3 0-5.272 1.399-5.272 3.758 0 2.534 1.969 3.228 5.124 3.548 3.79.38 4.08.935 4.08 1.692 0 1.31-1.042 1.861-3.473 1.861-3.068 0-3.735-.757-3.967-2.299 0-.176-.14-.29-.314-.29H61.05a.35.35 0 0 0-.35.35c0 1.98 1.044 4.307 6.11 4.307 3.645 0 5.755-1.456 5.755-4.02 0-2.503-1.68-3.174-5.238-3.64-3.59-.466-3.965-.728-3.965-1.572 0-.699.32-1.629 2.98-1.629 2.375 0 3.272.524 3.62 2.125a.34.34 0 0 0 .316.264h1.534c.087 0 .177-.057.236-.115a.476.476 0 0 0 .086-.264c-.231-2.795-2.053-4.076-5.758-4.076z"
      ></path>
    </svg>
  );
}
