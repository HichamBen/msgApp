import React from "react";

type IconProps = {
  onclick?: React.MouseEventHandler<SVGSVGElement>;
  style?: string;
  width: string;
  height: string;
  role?: string;
};

export const ChatsIcon = ({
  onclick,
  style,
  width,
  height,
  role,
}: IconProps) => {
  return (
    <svg
      role={role ?? "none"}
      width={width}
      height={height}
      viewBox="0 0 34 32"
      xmlns="http://www.w3.org/2000/svg"
      className={style ?? ""}
      onClick={onclick}
    >
      <path
        d="M2.55352 17.7516C1.17426 15.4279 0.690825 12.6805 1.19399 10.0256C1.69716 7.37061 3.15232 4.99068 5.28617 3.33277C7.42003 1.67486 10.0858 0.853023 12.7827 1.02162C15.4797 1.19022 18.0223 2.33765 19.9331 4.24841C21.8438 6.15917 22.9913 8.70179 23.1598 11.3988C23.3284 14.0957 22.5066 16.7614 20.8487 18.8953C19.1908 21.0291 16.8109 22.4843 14.1559 22.9875C11.5009 23.4906 8.7536 23.0072 6.42988 21.6279L2.59966 22.7201C2.44185 22.7645 2.27507 22.766 2.11646 22.7246C1.95786 22.6831 1.81316 22.6001 1.69724 22.4842C1.58132 22.3683 1.49837 22.2236 1.45692 22.065C1.41546 21.9064 1.417 21.7396 1.46137 21.5818L2.55352 17.7516Z"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11.4753 23.1662C12.0174 24.7119 12.8961 26.1178 14.0479 27.2825C15.1997 28.4472 16.5958 29.3415 18.1354 29.9008C19.675 30.4601 21.3196 30.6705 22.9504 30.5167C24.5812 30.3629 26.1574 29.8488 27.5653 29.0115L31.3955 30.1036C31.5533 30.148 31.7201 30.1495 31.8787 30.1081C32.0373 30.0666 32.182 29.9837 32.2979 29.8677C32.4138 29.7518 32.4968 29.6071 32.5382 29.4485C32.5797 29.2899 32.5782 29.1231 32.5338 28.9653L31.4416 25.1351C32.4167 23.4984 32.9524 21.6377 32.997 19.7331C33.0415 17.8285 32.5933 15.9447 31.6958 14.2643C30.7983 12.5838 29.482 11.1637 27.8744 10.1415C26.2667 9.11929 24.4223 8.52968 22.5198 8.42981"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const UsersIcon = ({
  onclick,
  style,
  width,
  height,
  role,
}: IconProps) => {
  return (
    <svg
      role={role ?? "none"}
      width={width}
      height={height}
      viewBox="0 0 34 32"
      xmlns="http://www.w3.org/2000/svg"
      className={style ?? ""}
      onClick={onclick}
    >
      <path d="M5.33333 32H26.6667V29.3333H32V21.3333C32 17.444 29.4247 14.146 25.89 13.0527C27.5567 11.9853 28.6667 10.1213 28.6667 8C28.6667 4.692 25.9753 2 22.6667 2C22.0967 2 21.5313 2.08533 20.9793 2.24867C19.7573 0.873333 17.9807 0 16 0C14.0193 0 12.2427 0.873333 11.0207 2.24867C10.4687 2.08533 9.90333 2 9.33333 2C6.02467 2 3.33333 4.692 3.33333 8C3.33333 10.1213 4.44333 11.9853 6.11 13.0527C2.57533 14.146 0 17.444 0 21.3333V29.3333H5.33333V32ZM25.3333 30.6667H6.66667V29.3333V20.6667C6.66667 20.444 6.68067 20.224 6.7 20.006C6.70667 19.9347 6.71533 19.864 6.72333 19.7927C6.74133 19.642 6.76467 19.4933 6.792 19.346C6.806 19.2713 6.81733 19.196 6.83333 19.122C6.87467 18.9307 6.92333 18.7427 6.97867 18.5567C7.00667 18.4647 7.04 18.3753 7.07133 18.2847C7.10733 18.1793 7.14533 18.0753 7.186 17.972C7.22533 17.8727 7.26667 17.774 7.31 17.6767C7.35267 17.5813 7.39933 17.488 7.446 17.3947C7.514 17.2587 7.586 17.1253 7.662 16.994C7.72867 16.88 7.79533 16.766 7.86733 16.656C7.92333 16.5707 7.98333 16.488 8.04267 16.4047C8.10533 16.3167 8.17 16.23 8.23667 16.1453C8.298 16.0673 8.35933 15.99 8.424 15.9147C8.508 15.8167 8.59533 15.722 8.684 15.6287C8.766 15.542 8.85 15.4567 8.936 15.374C9.042 15.2727 9.14933 15.1733 9.26133 15.078C9.33467 15.016 9.41067 14.9567 9.48667 14.8973C9.574 14.8293 9.662 14.7627 9.75267 14.6987C9.83667 14.6387 9.92067 14.5793 10.008 14.5227C10.096 14.4653 10.1867 14.4127 10.2767 14.3593C10.4467 14.2587 10.6213 14.1647 10.8007 14.0773C10.8907 14.0333 10.9793 13.9873 11.0713 13.9467L11.1787 13.8987C12.048 13.5353 13.0007 13.3333 14 13.3333H18C18.9993 13.3333 19.952 13.5353 20.8207 13.8993L20.928 13.9473C21.02 13.9873 21.1087 14.034 21.1987 14.078C21.378 14.1653 21.5527 14.2593 21.7227 14.36C21.8133 14.4133 21.904 14.466 21.9913 14.5233C22.078 14.58 22.1627 14.6393 22.2467 14.6993C22.3367 14.7633 22.4253 14.83 22.5127 14.898C22.5887 14.9573 22.6647 15.0167 22.738 15.0787C22.85 15.1733 22.9573 15.2733 23.0633 15.3747C23.15 15.4573 23.2333 15.5427 23.3153 15.6293C23.404 15.7227 23.492 15.8173 23.5753 15.9153C23.6393 15.9907 23.7013 16.068 23.7627 16.146C23.8293 16.2307 23.894 16.3173 23.9567 16.4053C24.016 16.4887 24.0767 16.5707 24.132 16.6567C24.204 16.7667 24.2713 16.8807 24.3373 16.9947C24.4133 17.126 24.4853 17.26 24.5533 17.3953C24.6 17.4887 24.6467 17.582 24.6893 17.6773C24.7333 17.7747 24.774 17.8733 24.8133 17.9727C24.854 18.0753 24.8913 18.18 24.928 18.2853C24.9593 18.376 24.9927 18.466 25.0207 18.5573C25.0767 18.7427 25.1253 18.9313 25.166 19.1227C25.182 19.1967 25.194 19.272 25.2073 19.3467C25.234 19.494 25.258 19.6433 25.276 19.7933C25.2847 19.864 25.2933 19.9353 25.2993 20.0067C25.3193 20.224 25.3333 20.444 25.3333 20.6667V29.3333V30.6667ZM30.6667 21.3333V28H26.6667V20.6667C26.6667 20.35 26.6473 20.038 26.614 19.73C26.606 19.6573 26.5907 19.5867 26.5813 19.5147C26.5493 19.2767 26.512 19.04 26.4613 18.8087C26.4447 18.7327 26.422 18.6593 26.4033 18.584C26.3473 18.358 26.2853 18.1347 26.212 17.916C26.1873 17.842 26.1587 17.77 26.132 17.6973C26.0533 17.482 25.9673 17.27 25.8727 17.0633C25.8393 16.9907 25.804 16.9187 25.768 16.8473C25.6687 16.6453 25.562 16.4487 25.4473 16.256C25.4053 16.1853 25.3633 16.1147 25.3187 16.0447C25.1987 15.856 25.0713 15.6733 24.938 15.4947C24.8893 15.4293 24.8427 15.3633 24.792 15.2993C24.646 15.1147 24.4907 14.938 24.33 14.766C24.2847 14.7173 24.2427 14.666 24.196 14.6187C23.9853 14.4027 23.7653 14.196 23.5333 14.0033C27.4847 14.1093 30.6667 17.3567 30.6667 21.3333ZM21.8153 3.414C22.0967 3.36067 22.3807 3.33333 22.6667 3.33333C25.2393 3.33333 27.3333 5.42667 27.3333 8C27.3333 10.5733 25.2393 12.6667 22.6667 12.6667C21.7513 12.6667 20.8707 12.4 20.116 11.904C20.126 11.8967 20.134 11.8873 20.1433 11.8793C20.7173 11.4227 21.212 10.8733 21.6093 10.254C21.622 10.234 21.6333 10.214 21.646 10.194C21.7613 10.01 21.8673 9.82067 21.9647 9.62533C21.9807 9.59333 21.9953 9.56133 22.0107 9.52933C22.0993 9.34467 22.1787 9.15533 22.25 8.96133C22.2647 8.92133 22.28 8.88133 22.294 8.84133C22.3587 8.65533 22.414 8.46533 22.462 8.272C22.474 8.224 22.488 8.17667 22.4987 8.12867C22.5413 7.94 22.5733 7.748 22.5993 7.55333C22.6067 7.502 22.6173 7.45133 22.6227 7.39933C22.6507 7.15933 22.6667 6.91467 22.6667 6.66667C22.6667 6.40267 22.6473 6.144 22.6173 5.888C22.608 5.80667 22.5927 5.72667 22.58 5.64533C22.552 5.46667 22.5187 5.29 22.4773 5.116C22.4573 5.03133 22.436 4.94733 22.4127 4.864C22.3587 4.67133 22.2953 4.48267 22.2247 4.298C22.2047 4.24667 22.1887 4.194 22.168 4.14333C22.0667 3.89667 21.9513 3.658 21.822 3.42667C21.8187 3.422 21.8173 3.418 21.8153 3.414ZM20.1087 3.27L20.1493 3.32267C20.182 3.36333 20.2113 3.406 20.2427 3.44733C20.5827 3.89467 20.8427 4.382 21.0253 4.896C21.0373 4.92933 21.0507 4.962 21.062 4.996C21.1413 5.23533 21.2013 5.48 21.246 5.72933C21.2553 5.78133 21.2627 5.83467 21.27 5.88733C21.3073 6.144 21.3333 6.40333 21.3333 6.66667C21.3333 6.88533 21.3167 7.10133 21.29 7.31533C21.284 7.36533 21.2747 7.41467 21.2673 7.46467C21.24 7.64133 21.206 7.816 21.1613 7.98733C21.152 8.02333 21.1433 8.06 21.1333 8.096C21.0127 8.52533 20.8407 8.93733 20.6193 9.32133C20.6153 9.328 20.6113 9.33467 20.6073 9.34133C20.5 9.526 20.38 9.704 20.2507 9.87467C20.2387 9.89 20.2273 9.906 20.2153 9.922C19.944 10.2733 19.628 10.5913 19.2727 10.8687C19.252 10.8847 19.23 10.9 19.2093 10.916C19.0447 11.0407 18.8727 11.1567 18.6927 11.2627C18.6607 11.2813 18.6307 11.302 18.598 11.32L18.522 11.364C17.77 11.7693 16.912 12 16 12C15.088 12 14.23 11.7693 13.4787 11.364L13.4027 11.32C13.3707 11.302 13.34 11.2813 13.308 11.2627C13.128 11.1567 12.956 11.0407 12.7913 10.916C12.77 10.9 12.7487 10.8847 12.728 10.8687C12.3733 10.5913 12.0573 10.2733 11.7853 9.922C11.7733 9.90667 11.762 9.89067 11.75 9.87467C11.6207 9.704 11.5013 9.526 11.3933 9.34133C11.3893 9.33467 11.3853 9.328 11.3813 9.32133C11.1593 8.93667 10.9873 8.52467 10.8667 8.09533C10.8567 8.06 10.848 8.02333 10.8387 7.988C10.794 7.816 10.76 7.64133 10.7327 7.46467C10.7253 7.41467 10.716 7.366 10.71 7.31533C10.6833 7.10133 10.6667 6.88533 10.6667 6.66667C10.6667 6.40333 10.6927 6.144 10.73 5.888C10.738 5.83533 10.7447 5.78267 10.754 5.73C10.7987 5.48133 10.8587 5.236 10.938 4.99667C10.9493 4.96267 10.9627 4.93 10.9747 4.89667C11.1573 4.38267 11.4173 3.89467 11.7573 3.448C11.7887 3.40667 11.818 3.36333 11.8507 3.32333L11.8913 3.27067C12.8707 2.088 14.3487 1.33333 16 1.33333C17.6513 1.33333 19.1293 2.088 20.1087 3.27ZM4.66667 8C4.66667 5.42667 6.76067 3.33333 9.33333 3.33333C9.61933 3.33333 9.90333 3.36067 10.1847 3.414C10.1827 3.418 10.1807 3.42267 10.1787 3.42667C10.05 3.65733 9.934 3.896 9.83267 4.14267C9.81133 4.194 9.79533 4.24667 9.77533 4.29867C9.70467 4.48333 9.64133 4.672 9.58733 4.864C9.564 4.94733 9.54267 5.03133 9.52267 5.116C9.48133 5.29 9.448 5.46667 9.42 5.64533C9.40733 5.726 9.39267 5.806 9.38267 5.888C9.35267 6.144 9.33333 6.40267 9.33333 6.66667C9.33333 6.91467 9.34933 7.15933 9.376 7.4C9.382 7.452 9.39267 7.502 9.39933 7.55333C9.42533 7.748 9.458 7.94067 9.5 8.12933C9.51067 8.17733 9.52467 8.224 9.53667 8.27133C9.58467 8.46467 9.64 8.65533 9.70467 8.842C9.71867 8.88267 9.734 8.922 9.74867 8.96267C9.82 9.156 9.9 9.34533 9.988 9.53C10.0033 9.562 10.0187 9.59467 10.0347 9.62667C10.132 9.822 10.238 10.0113 10.3533 10.1953C10.366 10.2153 10.3773 10.2353 10.39 10.2553C10.7873 10.8747 11.2827 11.4233 11.856 11.8807C11.8653 11.8887 11.874 11.8973 11.8833 11.9053C11.1293 12.4 10.2487 12.6667 9.33333 12.6667C6.76067 12.6667 4.66667 10.5733 4.66667 8ZM1.33333 28V21.3333C1.33333 17.3567 4.51533 14.1093 8.46733 14.0027C8.23533 14.1953 8.01533 14.4027 7.80467 14.618C7.758 14.6653 7.716 14.7167 7.67067 14.7653C7.51 14.9373 7.35467 15.114 7.208 15.2993C7.158 15.3627 7.11133 15.4287 7.06267 15.494C6.92867 15.6727 6.80133 15.8553 6.68133 16.0447C6.63733 16.1147 6.59533 16.1847 6.55267 16.256C6.438 16.4487 6.33133 16.6453 6.232 16.8473C6.19667 16.9193 6.16133 16.9907 6.12733 17.0633C6.032 17.27 5.94667 17.482 5.868 17.6973C5.84133 17.7707 5.81267 17.842 5.788 17.916C5.71467 18.1353 5.65267 18.3587 5.596 18.5853C5.57733 18.66 5.55533 18.7333 5.53867 18.8087C5.488 19.0407 5.45067 19.2773 5.41867 19.516C5.40867 19.588 5.394 19.658 5.386 19.7307C5.35267 20.038 5.33333 20.35 5.33333 20.6667V28H1.33333Z" />
    </svg>
  );
};

export const PhoneIcon = ({
  onclick,
  style,
  width,
  height,
  role,
}: IconProps) => {
  return (
    <svg
      role={role ?? "none"}
      width={width}
      height={height}
      viewBox="0 0 34 32"
      xmlns="http://www.w3.org/2000/svg"
      className={style ?? ""}
      onClick={onclick}
    >
      <path d="M14.4298 18.723C14.1372 18.723 13.8446 18.611 13.6218 18.3882L8.85494 13.6225C8.64009 13.4076 8.52009 13.1174 8.52009 12.8145C8.52009 12.5116 8.64009 12.2202 8.85494 12.0065L11.6366 9.22594C12.5052 8.35737 12.5052 6.94366 11.6366 6.07509L8.45951 2.89796C7.61723 2.05682 6.14981 2.05568 5.30753 2.89796C5.25724 2.94825 5.20124 2.99396 5.14181 3.03511C5.01038 3.12653 1.82068 5.40767 2.34411 10.1185C2.41382 10.7459 1.9624 11.3105 1.33497 11.3802C0.713257 11.4522 0.142974 10.9985 0.0732595 10.3711C-0.559881 4.68196 3.10068 1.70025 3.76125 1.21226C5.4721 -0.428881 8.39094 -0.401453 10.0744 1.28083L13.2515 4.45796C15.0115 6.21795 15.0115 9.0808 13.2515 10.8408L11.2801 12.8145L15.2378 16.7722C15.6846 17.2191 15.6846 17.9413 15.2378 18.3882C15.0149 18.6122 14.7223 18.723 14.4298 18.723Z" />
      <path d="M8.8687 24.2842C8.57613 24.2842 8.28356 24.1722 8.0607 23.9493C5.25271 21.1413 3.151 18.4007 1.81272 15.803C1.52358 15.2419 1.74415 14.5528 2.30529 14.2636C2.86872 13.9745 3.55557 14.1962 3.84471 14.7562C5.07442 17.1436 7.03556 19.6933 9.67669 22.3333C10.1235 22.7802 10.1235 23.5024 9.67669 23.9493C9.45269 24.1733 9.16127 24.2842 8.8687 24.2842Z" />
      <path d="M22.848 31.9596C18.3486 31.9596 13.3635 29.2522 8.00921 23.8968C7.56236 23.4499 7.56236 22.7276 8.00921 22.2808C8.45607 21.8339 9.17835 21.8339 9.62521 22.2808C14.8126 27.4693 19.6572 30.0088 23.664 29.6362C27.1954 29.3025 28.9074 26.8419 28.9246 26.8156C28.9646 26.7562 29.0103 26.7002 29.0617 26.6499C29.4823 26.2305 29.7143 25.6693 29.7143 25.0751C29.7143 24.4808 29.4823 23.9208 29.0617 23.5002L25.8846 20.3219C25.464 19.9014 24.904 19.6705 24.3074 19.6705C23.712 19.6705 23.1532 19.9014 22.7337 20.3219L19.9509 23.1025C19.504 23.5494 18.7817 23.5494 18.3349 23.1025L13.5703 18.3379C13.1235 17.8911 13.1235 17.1688 13.5703 16.722C14.0172 16.2751 14.7395 16.2751 15.1863 16.722L19.1429 20.6785L21.1166 18.7059C21.968 17.8534 23.1006 17.3837 24.3074 17.3837C25.5143 17.3837 26.648 17.8534 27.5006 18.7048L30.6777 21.8842C31.5303 22.7356 32 23.8694 32 25.0751C32 26.2476 31.5554 27.3528 30.7463 28.1962C30.3303 28.7585 28.0869 31.5139 23.8789 31.9116C23.5394 31.9448 23.1943 31.9596 22.848 31.9596Z" />
    </svg>
  );
};

export const GearIcon = ({
  onclick,
  style,
  width,
  height,
  role,
}: IconProps) => {
  return (
    <svg
      role={role ?? "none"}
      width={width}
      height={height}
      viewBox="0 0 34 34"
      xmlns="http://www.w3.org/2000/svg"
      className={style ?? ""}
      onClick={onclick}
    >
      <path
        d="M18.4838 13.743C17.4738 13.6417 16.4576 13.8599 15.5744 14.3678C14.6913 14.8758 13.9842 15.6485 13.5502 16.5804C13.1161 17.5122 12.9762 18.5575 13.1497 19.5732C13.3231 20.5889 13.8014 21.5254 14.5191 22.2543C15.2368 22.9832 16.1587 23.469 17.1587 23.6452C18.1587 23.8214 19.1879 23.6793 20.1053 23.2384C21.0228 22.7975 21.7836 22.0794 22.2837 21.1824C22.7838 20.2853 22.9986 19.2532 22.8989 18.2273C22.7852 17.0773 22.2835 16.0026 21.4788 15.1853C20.6742 14.368 19.6161 13.8585 18.4838 13.743ZM30.3369 18.7188C30.3337 19.2622 30.2944 19.8049 30.2192 20.343L33.6966 23.1133C33.848 23.2408 33.9501 23.4187 33.9846 23.6153C34.0191 23.812 33.9838 24.0147 33.8851 24.1875L30.5953 29.9688C30.4954 30.1399 30.3392 30.2696 30.1543 30.3352C29.9694 30.4008 29.7677 30.398 29.5846 30.3273L26.131 28.9148C25.9405 28.8378 25.7342 28.81 25.5306 28.8339C25.327 28.8577 25.1323 28.9325 24.9641 29.0516C24.4371 29.4202 23.8832 29.7477 23.3073 30.0312C23.1263 30.1206 22.9697 30.2539 22.8514 30.4193C22.7331 30.5847 22.6567 30.7772 22.6289 30.9797L22.1113 34.7211C22.0773 34.9187 21.9768 35.0982 21.8269 35.2288C21.6771 35.3595 21.4872 35.4333 21.2898 35.4375H14.7102C14.516 35.4341 14.3288 35.3636 14.1793 35.2376C14.0299 35.1117 13.9271 34.9377 13.888 34.7445L13.3711 31.0086C13.3421 30.8039 13.2637 30.6096 13.1429 30.443C13.0221 30.2765 12.8627 30.1428 12.6788 30.0539C12.1036 29.7719 11.5517 29.4435 11.0282 29.0719C10.8606 28.9534 10.6666 28.8792 10.4637 28.8559C10.2608 28.8326 10.0554 28.8609 9.86594 28.9383L6.4131 30.35C6.23012 30.4208 6.02842 30.4237 5.84353 30.3582C5.65864 30.2928 5.50242 30.1632 5.4024 29.9922L2.11262 24.2109C2.01372 24.0382 1.97837 23.8354 2.01288 23.6387C2.04739 23.442 2.14952 23.2641 2.30107 23.1367L5.2401 20.793C5.40112 20.6631 5.52767 20.4945 5.60826 20.3024C5.68885 20.1103 5.72094 19.9009 5.70161 19.693C5.67392 19.3672 5.657 19.0422 5.657 18.7164C5.657 18.3906 5.67315 18.0703 5.70161 17.7516C5.71883 17.5449 5.68517 17.3372 5.60366 17.1471C5.52216 16.957 5.39537 16.7905 5.23472 16.6625L2.29723 14.3187C2.14813 14.1907 2.04816 14.0134 2.01483 13.818C1.9815 13.6226 2.01694 13.4215 2.11493 13.25L5.40471 7.46875C5.50461 7.29765 5.66078 7.16786 5.84568 7.10226C6.03058 7.03665 6.23234 7.03945 6.41541 7.11016L9.86902 8.52266C10.0595 8.59968 10.2658 8.6275 10.4694 8.60364C10.673 8.57978 10.8677 8.50498 11.0359 8.38594C11.5629 8.01728 12.1168 7.68978 12.6927 7.40625C12.8737 7.31687 13.0303 7.1836 13.1486 7.01819C13.2669 6.85278 13.3433 6.66032 13.3711 6.45781L13.8887 2.71641C13.9227 2.51881 14.0232 2.33935 14.1731 2.20868C14.3229 2.07801 14.5128 2.00425 14.7102 2H21.2898C21.484 2.00341 21.6712 2.07391 21.8207 2.19987C21.9701 2.32583 22.0729 2.49975 22.112 2.69297L22.6289 6.42891C22.6579 6.63365 22.7363 6.82793 22.8571 6.99448C22.9779 7.16104 23.1373 7.2947 23.3212 7.38359C23.8964 7.66559 24.4483 7.99399 24.9718 8.36563C25.1394 8.48407 25.3334 8.5583 25.5363 8.58162C25.7392 8.60495 25.9446 8.57663 26.1341 8.49922L29.5869 7.0875C29.7699 7.01673 29.9716 7.01381 30.1565 7.07927C30.3414 7.14472 30.4976 7.27435 30.5976 7.44531L33.8874 13.2266C33.9863 13.3993 34.0216 13.6021 33.9871 13.7988C33.9526 13.9955 33.8505 14.1734 33.6989 14.3008L30.7599 16.6445C30.5982 16.7739 30.4709 16.9424 30.3896 17.1345C30.3083 17.3266 30.2757 17.5363 30.2945 17.7445C30.3199 18.068 30.3369 18.393 30.3369 18.7188Z"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
export const PowerIcon = ({ onclick, style, width, height }: IconProps) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 34 34"
      xmlns="http://www.w3.org/2000/svg"
      className={style ?? ""}
      onClick={onclick}
    >
      <path d="M16 29C8.83187 29 3 23.1581 3 15.9781C3 12.075 4.70313 8.41558 7.6725 5.94371C7.81114 5.82759 7.97133 5.73997 8.14389 5.68585C8.31645 5.63174 8.49799 5.61219 8.67811 5.62834C8.85823 5.64449 9.0334 5.69601 9.19358 5.77995C9.35376 5.86389 9.49581 5.97861 9.6116 6.11753C9.72738 6.25646 9.81462 6.41685 9.86832 6.58954C9.92202 6.76223 9.94113 6.94381 9.92455 7.1239C9.90797 7.30398 9.85603 7.47902 9.77171 7.639C9.68738 7.79898 9.57232 7.94076 9.43312 8.05621C7.0925 10.0062 5.75 12.8937 5.75 15.9781C5.75 21.6418 10.3481 26.25 16 26.25C21.6519 26.25 26.25 21.6418 26.25 15.9781C26.2498 14.4644 25.9144 12.9696 25.2679 11.601C24.6214 10.2323 23.6797 9.0239 22.5106 8.06246C22.3658 7.9494 22.2451 7.80847 22.1557 7.64799C22.0663 7.48752 22.0099 7.31074 21.9899 7.12811C21.9699 6.94549 21.9868 6.76071 22.0394 6.58469C22.092 6.40868 22.1794 6.24499 22.2964 6.10331C22.4133 5.96163 22.5575 5.84482 22.7203 5.75979C22.8832 5.67476 23.0614 5.62322 23.2445 5.60823C23.4276 5.59323 23.6119 5.61508 23.7864 5.67249C23.9609 5.72989 24.1222 5.82169 24.2606 5.94246C25.7427 7.16142 26.9363 8.69356 27.7558 10.4288C28.5753 12.1639 29.0002 14.0591 29 15.9781C29 23.1581 23.1681 29 16 29Z" />
      <path d="M16 17C15.6353 17 15.2856 16.8551 15.0277 16.5973C14.7699 16.3394 14.625 15.9897 14.625 15.625V4.375C14.625 4.01033 14.7699 3.66059 15.0277 3.40273C15.2856 3.14487 15.6353 3 16 3C16.3647 3 16.7144 3.14487 16.9723 3.40273C17.2301 3.66059 17.375 4.01033 17.375 4.375V15.625C17.375 15.9897 17.2301 16.3394 16.9723 16.5973C16.7144 16.8551 16.3647 17 16 17Z" />
    </svg>
  );
};

export const UserIcon = ({
  onclick,
  style,
  width,
  height,
  role,
}: IconProps) => {
  return (
    <svg
      role={role ?? "none"}
      width={width}
      height={height}
      viewBox="0 0 34 32"
      xmlns="http://www.w3.org/2000/svg"
      className={style ?? ""}
      onClick={onclick}
    >
      <g>
        <ellipse cx="12" cy="8" rx="5" ry="6" />
        <path d="M21.8,19.1c-0.9-1.8-2.6-3.3-4.8-4.2c-0.6-0.2-1.3-0.2-1.8,0.1c-1,0.6-2,0.9-3.2,0.9s-2.2-0.3-3.2-0.9    C8.3,14.8,7.6,14.7,7,15c-2.2,0.9-3.9,2.4-4.8,4.2C1.5,20.5,2.6,22,4.1,22h15.8C21.4,22,22.5,20.5,21.8,19.1z" />
      </g>
    </svg>
  );
};

export const CrescentIcon = ({
  onclick,
  style,
  width,
  height,
  role,
}: IconProps) => {
  return (
    <svg
      role={role ?? "none"}
      width={width}
      height={height}
      viewBox="0 0 34 32"
      xmlns="http://www.w3.org/2000/svg"
      className={style ?? ""}
      onClick={onclick}
    >
      <path d="M20.21,15.32A8.56,8.56,0,1,1,11.29,3.5a.5.5,0,0,1,.51.28.49.49,0,0,1-.09.57A6.46,6.46,0,0,0,9.8,9a6.57,6.57,0,0,0,9.71,5.72.52.52,0,0,1,.58.07A.52.52,0,0,1,20.21,15.32Z" />
    </svg>
  );
};

export const CarretIcon = ({
  onclick,
  style,
  width,
  height,
  role,
}: IconProps) => {
  return (
    <svg
      role={role ?? "none"}
      width={width}
      height={height}
      viewBox="0 0 512 512"
      xmlns="http://www.w3.org/2000/svg"
      className={style ?? ""}
      onClick={onclick}
    >
      <path d="M98.9,184.7l1.8,2.1l136,156.5c4.6,5.3,11.5,8.6,19.2,8.6c7.7,0,14.6-3.4,19.2-8.6L411,187.1l2.3-2.6  c1.7-2.5,2.7-5.5,2.7-8.7c0-8.7-7.4-15.8-16.6-15.8v0H112.6v0c-9.2,0-16.6,7.1-16.6,15.8C96,179.1,97.1,182.2,98.9,184.7z" />
    </svg>
  );
};

export const TrashIcon = ({
  onclick,
  style,
  width,
  height,
  role,
}: IconProps) => {
  return (
    <svg
      role={role ?? "none"}
      width={width}
      height={height}
      viewBox="0 0 34 32"
      xmlns="http://www.w3.org/2000/svg"
      className={style ?? ""}
      onClick={onclick}
    >
      <path d="M23.1429 4.28571H18.7296L16.9082 1.24554C16.3982 0.472875 15.6107 0 14.7107 0H9.28929C8.38929 0 7.55357 0.472875 7.09286 1.24554L5.27036 4.28571H0.857143C0.381696 4.28571 0 4.66768 0 5.14286V6C0 6.47679 0.381696 6.85714 0.857143 6.85714H1.71429V24C1.71429 25.8937 3.24911 27.4286 5.14286 27.4286H18.8571C20.7509 27.4286 22.2857 25.8937 22.2857 24V6.85714H23.1429C23.6196 6.85714 24 6.47679 24 6V5.14286C24 4.66768 23.6196 4.28571 23.1429 4.28571ZM9.20893 2.72571C9.2625 2.63196 9.36964 2.57143 9.48214 2.57143H14.5179C14.6317 2.57143 14.7388 2.6317 14.7924 2.72545L15.7286 4.28571H8.27143L9.20893 2.72571ZM18.8571 24.8571H5.14286C4.66945 24.8571 4.28571 24.4734 4.28571 24V6.85714H19.7143V24C19.7143 24.4714 19.3286 24.8571 18.8571 24.8571ZM12 22.2857C12.4738 22.2857 12.8571 21.9024 12.8571 21.4286V10.2857C12.8571 9.81193 12.4738 9.42857 12 9.42857C11.5262 9.42857 11.1429 9.81428 11.1429 10.2857V21.4286C11.1429 21.9 11.5286 22.2857 12 22.2857ZM7.71429 22.2857C8.18571 22.2857 8.57143 21.9 8.57143 21.4286V10.2857C8.57143 9.81193 8.18807 9.42857 7.71429 9.42857C7.2405 9.42857 6.85714 9.81428 6.85714 10.2857V21.4286C6.85714 21.9 7.24286 22.2857 7.71429 22.2857ZM16.2857 22.2857C16.7595 22.2857 17.1429 21.9024 17.1429 21.4286V10.2857C17.1429 9.81193 16.7595 9.42857 16.2857 9.42857C15.8119 9.42857 15.4286 9.81428 15.4286 10.2857V21.4286C15.4286 21.9 15.8143 22.2857 16.2857 22.2857Z" />
    </svg>
  );
};

export const SearchIcon = ({
  onclick,
  style,
  width,
  height,
  role,
}: IconProps) => {
  return (
    <svg
      role={role ?? "none"}
      width={width}
      height={height}
      viewBox="0 0 512 512"
      xmlns="http://www.w3.org/2000/svg"
      className={style ?? ""}
      onClick={onclick}
    >
      <path d="M344.5,298c15-23.6,23.8-51.6,23.8-81.7c0-84.1-68.1-152.3-152.1-152.3C132.1,64,64,132.2,64,216.3  c0,84.1,68.1,152.3,152.1,152.3c30.5,0,58.9-9,82.7-24.4l6.9-4.8L414.3,448l33.7-34.3L339.5,305.1L344.5,298z M301.4,131.2  c22.7,22.7,35.2,52.9,35.2,85c0,32.1-12.5,62.3-35.2,85c-22.7,22.7-52.9,35.2-85,35.2c-32.1,0-62.3-12.5-85-35.2  c-22.7-22.7-35.2-52.9-35.2-85c0-32.1,12.5-62.3,35.2-85c22.7-22.7,52.9-35.2,85-35.2C248.5,96,278.7,108.5,301.4,131.2z" />
    </svg>
  );
};

export const CheckIcon = ({
  onclick,
  style,
  width,
  height,
  role,
}: IconProps) => {
  return (
    <svg
      role={role ?? "none"}
      width={width}
      height={height}
      viewBox="0 0 15 11"
      xmlns="http://www.w3.org/2000/svg"
      className={style ?? ""}
      onClick={onclick}
    >
      <path d="M15 1.07143C15 1.34558 14.8954 1.61987 14.6861 1.82879L6.11468 10.4002C5.90625 10.6105 5.6317 10.7143 5.35714 10.7143C5.08259 10.7143 4.80871 10.6097 4.59978 10.4004L0.314063 6.11468C0.104799 5.90625 0 5.6317 0 5.35714C0 4.74509 0.500558 4.28571 1.07143 4.28571C1.34558 4.28571 1.61987 4.39035 1.82879 4.59961L5.35714 8.12946L13.1719 0.314732C13.3795 0.104799 13.654 0 13.9286 0C14.5011 0 15 0.458705 15 1.07143Z" />
    </svg>
  );
};

export const DoubleCheckIcon = ({
  onclick,
  style,
  width,
  height,
  role,
}: IconProps) => {
  return (
    <svg
      role={role ?? "none"}
      width={width}
      height={height}
      viewBox="0 0 15 15"
      xmlns="http://www.w3.org/2000/svg"
      className={style ?? ""}
      onClick={onclick}
    >
      <path d="M4.60045 7.18527C4.80804 7.39621 5.08259 7.5 5.35714 7.5C5.6317 7.5 5.90558 7.39537 6.11451 7.1861L11.4717 1.82896C11.6819 1.61987 11.7857 1.34565 11.7857 1.07143C11.7857 0.459375 11.2852 0 10.7143 0C10.4401 0 10.1658 0.104632 9.95692 0.313895L5.35714 4.91518L3.43527 2.9933C3.22768 2.78237 2.95312 2.67857 2.67857 2.67857C2.1077 2.67857 1.60714 3.13828 1.60714 3.75C1.60714 4.02415 1.71177 4.29844 1.92104 4.50737L4.60045 7.18527ZM15 5.35714C15 4.74509 14.4994 4.28571 13.9286 4.28571C13.6544 4.28571 13.3801 4.39035 13.1712 4.59961L5.35714 12.4152L1.82913 8.88616C1.61987 8.67522 1.34565 8.57143 1.07143 8.57143C0.500558 8.57143 0 9.03114 0 9.64286C0 9.91701 0.104632 10.1913 0.313895 10.4002L4.59961 14.6859C4.80804 14.8962 5.08259 15 5.35714 15C5.6317 15 5.90558 14.8954 6.11451 14.6861L14.6859 6.11468C14.8962 5.90625 15 5.6317 15 5.35714Z" />
    </svg>
  );
};

export const HistoryIcon = ({
  onclick,
  style,
  width,
  height,
  role,
}: IconProps) => {
  return (
    <svg
      role={role ?? "none"}
      width={width}
      height={height}
      viewBox="0 0 20 19"
      xmlns="http://www.w3.org/2000/svg"
      className={style ?? ""}
      onClick={onclick}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.5 0C7 0 3.9 1.9 2.3 4.8L0 2.5V9H6.5L3.7 6.2C5 3.7 7.5 2 10.5 2C14.6 2 18 5.4 18 9.5C18 13.6 14.6 17 10.5 17C7.2 17 4.5 14.9 3.4 12H1.3C2.4 16 6.1 19 10.5 19C15.8 19 20 14.7 20 9.5C20 4.3 15.7 0 10.5 0ZM9 5V10.1L13.7 12.9L14.5 11.6L10.5 9.2V5H9Z"
      />
    </svg>
  );
};

export const AttachedIcon = ({
  onclick,
  style,
  width,
  height,
  role,
}: IconProps) => {
  return (
    <svg
      role={role ?? "none"}
      width={width}
      height={height}
      viewBox="0 0 22 26"
      xmlns="http://www.w3.org/2000/svg"
      className={style ?? ""}
      onClick={onclick}
    >
      <path
        d="M13.1571 7.36027L6.90427 13.9587C5.78533 15.1395 5.78533 17.0541 6.90427 18.2349C8.0232 19.4157 9.8376 19.4157 10.9576 18.2349L18.7304 10.0333C20.6888 7.9672 20.6888 4.61573 18.7304 2.5496C16.772 0.483467 13.5965 0.483467 11.6381 2.5496L3.0984 11.5608C0.300533 14.5133 0.300533 19.2995 3.0984 22.252C5.89627 25.2045 10.4328 25.2045 13.2307 22.252L19.2381 15.9128"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const AscArrowIcon = ({
  onclick,
  style,
  width,
  height,
  role,
}: IconProps) => {
  return (
    <svg
      role={role ?? "none"}
      width={width}
      height={height}
      viewBox="0 0 18 16"
      xmlns="http://www.w3.org/2000/svg"
      className={style ?? ""}
      onClick={onclick}
    >
      <path d="M17.2941 2.08711C17.3422 1.53693 16.9352 1.0519 16.3851 1.00376L7.41931 0.219361C6.86913 0.171226 6.38409 0.578217 6.33596 1.1284C6.28782 1.67858 6.69482 2.16362 7.245 2.21175L15.2146 2.909L14.5173 10.8786C14.4692 11.4287 14.8762 11.9138 15.4263 11.9619C15.9765 12.01 16.4616 11.603 16.5097 11.0529L17.2941 2.08711ZM1.64279 15.6025L16.9407 2.766L15.6551 1.23391L0.357212 14.0704L1.64279 15.6025Z" />
    </svg>
  );
};

export const DesArrowIcon = ({
  onclick,
  style,
  width,
  height,
  role,
}: IconProps) => {
  return (
    <svg
      role={role ?? "none"}
      width={width}
      height={height}
      viewBox="0 0 17 16"
      xmlns="http://www.w3.org/2000/svg"
      className={style ?? ""}
      onClick={onclick}
    >
      <path d="M0.00194734 14.1376C-0.0329376 14.6888 0.385604 15.1639 0.936786 15.1988L9.91881 15.7673C10.47 15.8022 10.9451 15.3836 10.98 14.8324C11.0149 14.2812 10.5963 13.8061 10.0451 13.7713L2.06112 13.2659L2.56644 5.28192C2.60132 4.73073 2.18278 4.25563 1.6316 4.22075C1.08042 4.18586 0.605315 4.6044 0.57043 5.15559L0.00194734 14.1376ZM15.3236 0.249641L0.33892 13.4504L1.66098 14.9511L16.6456 1.75036L15.3236 0.249641Z" />
    </svg>
  );
};

export const FilledPhone = ({
  onclick,
  style,
  width,
  height,
  role,
}: IconProps) => {
  return (
    <svg
      role={role ?? "none"}
      width={width}
      height={height}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      className={style ?? ""}
      onClick={onclick}
    >
      <path d="M23.9626 18.1409L22.8728 22.8659C22.7197 23.5339 22.1326 24.0012 21.445 24.0012C9.61889 24.0003 0.000144958 14.3815 0.000144958 2.55496C0.000144958 1.86777 0.467442 1.27996 1.13546 1.12762L5.86046 0.037775C6.54858 -0.121694 7.25171 0.235494 7.53765 0.88715L9.71827 5.97309C9.97318 6.57215 9.80124 7.27012 9.29733 7.68168L6.77358 9.70809C8.36639 12.9528 11.0045 15.5909 14.2501 17.1847L16.3164 14.6628C16.7236 14.1575 17.4269 13.9826 18.0259 14.2421L23.1119 16.4222C23.7236 16.744 24.122 17.4565 23.9626 18.1409Z" />
    </svg>
  );
};

export const VideoIcon = ({
  onclick,
  style,
  width,
  height,
  role,
}: IconProps) => {
  return (
    <svg
      role={role ?? "none"}
      width={width}
      height={height}
      viewBox="0 0 32 21"
      xmlns="http://www.w3.org/2000/svg"
      className={style ?? ""}
      onClick={onclick}
    >
      <path d="M31.5826 1.94783C31.3043 1.8087 31.0261 1.8087 30.887 1.94783L26.0174 5.70435V4.03478C26.0174 1.8087 24.2087 0 21.9826 0H4.03478C1.8087 0 0 1.8087 0 4.03478V16.5565C0 18.7826 1.8087 20.5913 4.03478 20.5913H21.9826C24.2087 20.5913 26.0174 18.7826 26.0174 16.5565V14.887L30.887 18.6435C31.0261 18.7826 31.3043 18.7826 31.5826 18.6435C31.8609 18.5043 32 18.3652 32 18.087V2.50435C32 2.22609 31.8609 2.08696 31.5826 1.94783Z" />
    </svg>
  );
};

export const BlockIcon = ({
  onclick,
  style,
  width,
  height,
  role,
}: IconProps) => {
  return (
    <svg
      role={role ?? "none"}
      width={width}
      height={height}
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      className={style ?? ""}
      onClick={onclick}
    >
      <path d="M16 0C7.16 0 0 7.16 0 16C0 24.84 7.16 32 16 32C24.84 32 32 24.84 32 16C32 7.16 24.84 0 16 0ZM3.2 16C3.2 8.928 8.928 3.2 16 3.2C18.96 3.2 21.672 4.216 23.84 5.896L5.896 23.84C4.216 21.672 3.2 18.96 3.2 16ZM16 28.8C13.04 28.8 10.328 27.784 8.16 26.104L26.104 8.16C27.784 10.328 28.8 13.04 28.8 16C28.8 23.072 23.072 28.8 16 28.8Z" />
    </svg>
  );
};

export const PenIcon = ({ onclick, style, width, height, role }: IconProps) => {
  return (
    <svg
      role={role ?? "none"}
      width={width}
      height={height}
      viewBox="0 0 31 30"
      xmlns="http://www.w3.org/2000/svg"
      className={style ?? ""}
      onClick={onclick}
    >
      <path d="M1.00607 30.0004C0.864957 30.0013 0.725261 29.9723 0.596164 29.9153C0.467067 29.8583 0.351493 29.7746 0.257039 29.6698C0.162585 29.5649 0.0913909 29.4413 0.0481361 29.307C0.00488117 29.1726 -0.00945478 29.0307 0.00607055 28.8904L0.906071 20.7204C0.931293 20.4931 1.03365 20.2814 1.19607 20.1204L20.2761 1.05042C20.6069 0.717534 21.0003 0.453353 21.4337 0.27308C21.867 0.0928065 22.3317 0 22.8011 0C23.2704 0 23.7351 0.0928065 24.1685 0.27308C24.6018 0.453353 24.9952 0.717534 25.3261 1.05042L29.0061 4.68042C29.339 5.01128 29.6031 5.4047 29.7834 5.83803C29.9637 6.27137 30.0565 6.73608 30.0565 7.20542C30.0565 7.67476 29.9637 8.13947 29.7834 8.57281C29.6031 9.00615 29.339 9.39957 29.0061 9.73042L9.88607 28.8004C9.72511 28.9628 9.51334 29.0652 9.28607 29.0904L1.11607 30.0004H1.00607ZM2.86607 21.2804L2.13607 27.8704L8.72607 27.1404L27.5461 8.31042C27.838 8.01472 28.0017 7.61594 28.0017 7.20042C28.0017 6.78491 27.838 6.38612 27.5461 6.09042L23.9161 2.46042C23.6204 2.16851 23.2216 2.00483 22.8061 2.00483C22.3906 2.00483 21.9918 2.16851 21.6961 2.46042L2.86607 21.2804Z" />
      <path d="M25.526 12.7404C25.2637 12.7393 25.0123 12.6352 24.826 12.4504L17.556 5.18043C17.3691 4.98815 17.2661 4.72947 17.2699 4.46129C17.2736 4.19312 17.3838 3.93741 17.576 3.75043C17.7683 3.56346 18.027 3.46052 18.2952 3.46427C18.5634 3.46802 18.8191 3.57815 19.006 3.77043L26.236 11.0004C26.4223 11.1878 26.5268 11.4412 26.5268 11.7054C26.5268 11.9696 26.4223 12.2231 26.236 12.4104C26.146 12.5104 26.0367 12.5911 25.9147 12.6478C25.7927 12.7045 25.6605 12.736 25.526 12.7404Z" />
      <path d="M17.549 11.041L8.46973 20.1202L9.88394 21.5344L18.9632 12.4552L17.549 11.041Z" />
    </svg>
  );
};

export const PlusIcon = ({
  onclick,
  style,
  width,
  height,
  role,
}: IconProps) => {
  return (
    <svg
      role={role ?? "none"}
      width={width}
      height={height}
      viewBox="0 0 60 60"
      xmlns="http://www.w3.org/2000/svg"
      className={style ?? ""}
      onClick={onclick}
    >
      <path d="M30 0C13.4297 0 0 13.4297 0 30C0 46.5703 13.4297 60 30 60C46.5703 60 60 46.5703 60 30C60 13.4297 46.5703 0 30 0ZM41.25 32.8125H32.8125V41.25C32.8125 42.7969 31.5469 44.0625 30.1055 44.0625C28.4531 44.0625 27.1875 42.7969 27.1875 41.25V32.8125H18.75C17.2031 32.8125 15.9375 31.5469 15.9375 30C15.9375 28.4531 17.2031 27.1875 18.75 27.1875H27.1875V18.75C27.1875 17.2031 28.4531 15.9375 30 15.9375C31.5469 15.9375 32.8125 17.2031 32.8125 18.75V27.1875H41.25C42.7969 27.1875 44.0625 28.4531 44.0625 30C44.0625 31.5469 42.7969 32.8125 41.25 32.8125Z" />
    </svg>
  );
};

export const RecordIcon = ({
  onclick,
  style,
  width,
  height,
  role,
}: IconProps) => {
  return (
    <svg
      role={role ?? "none"}
      width={width}
      height={height}
      viewBox="0 0 42 47"
      xmlns="http://www.w3.org/2000/svg"
      className={style ?? ""}
      onClick={onclick}
    >
      <path d="M20.4824 37.125C24.1258 37.1141 27.6169 35.662 30.1931 33.0857C32.7694 30.5094 34.2215 27.0184 34.2324 23.375V13.75C34.2324 10.1033 32.7838 6.60591 30.2051 4.02728C27.6265 1.44866 24.1291 0 20.4824 0C16.8357 0 13.3383 1.44866 10.7597 4.02728C8.18108 6.60591 6.73242 10.1033 6.73242 13.75V23.375C6.7433 27.0184 8.19545 30.5094 10.7717 33.0857C13.348 35.662 16.839 37.1141 20.4824 37.125ZM12.2324 13.75C12.2324 11.562 13.1016 9.46354 14.6488 7.91637C16.196 6.36919 18.2944 5.5 20.4824 5.5C22.6705 5.5 24.7689 6.36919 26.3161 7.91637C27.8632 9.46354 28.7324 11.562 28.7324 13.75V23.375C28.7324 25.563 27.8632 27.6615 26.3161 29.2086C24.7689 30.7558 22.6705 31.625 20.4824 31.625C18.2944 31.625 16.196 30.7558 14.6488 29.2086C13.1016 27.6615 12.2324 25.563 12.2324 23.375V13.75Z" />
      <path d="M23.2324 17.1875C23.9618 17.1875 24.6612 16.8978 25.177 16.382C25.6927 15.8663 25.9824 15.1668 25.9824 14.4375V12.375C25.9824 11.6457 25.6927 10.9462 25.177 10.4305C24.6612 9.91473 23.9618 9.625 23.2324 9.625C22.5031 9.625 21.8036 9.91473 21.2879 10.4305C20.7722 10.9462 20.4824 11.6457 20.4824 12.375V14.4375C20.4824 15.1668 20.7722 15.8663 21.2879 16.382C21.8036 16.8978 22.5031 17.1875 23.2324 17.1875Z" />
      <path d="M39.4575 30.525C38.0825 29.975 36.4325 30.525 35.8825 31.9C34.6588 34.6748 32.6566 37.035 30.1184 38.6946C27.5802 40.3541 24.6151 41.2418 21.5825 41.25H19.5145C16.4819 41.2418 13.5168 40.3541 10.9786 38.6946C8.44046 37.035 6.43817 34.6748 5.21451 31.9C5.08022 31.5667 4.87876 31.2647 4.62269 31.0127C4.36662 30.7606 4.0614 30.564 3.72605 30.435C3.3907 30.306 3.03238 30.2474 2.67341 30.2629C2.31445 30.2784 1.96251 30.3676 1.63951 30.525C1.30625 30.6593 1.00419 30.8608 0.752153 31.1168C0.500114 31.3729 0.303483 31.6781 0.174501 32.0135C0.0455192 32.3488 -0.0130522 32.7071 0.00243251 33.0661C0.0179172 33.4251 0.107127 33.777 0.264508 34.1C3.56451 41.8 11.2645 46.75 19.652 46.75H21.7145C25.8237 46.7439 29.8427 45.5454 33.2841 43.3C36.7255 41.0545 39.4413 37.8586 41.102 34.1C41.5145 32.725 40.8325 31.075 39.4575 30.525Z" />
    </svg>
  );
};

export const AddContactIcon = ({
  onclick,
  style,
  width,
  height,
  role,
}: IconProps) => {
  return (
    <svg
      role={role ?? "none"}
      width={width}
      height={height}
      viewBox="0 0 55 55"
      xmlns="http://www.w3.org/2000/svg"
      className={style ?? ""}
      onClick={onclick}
    >
      <rect width="55" height="55" rx="27.5"/>
      <path
        d="M22.2917 20C22.2917 16.4583 25 13.75 28.5417 13.75C32.0833 13.75 34.7917 16.4583 34.7917 20C34.7917 23.5417 32.0833 26.25 28.5417 26.25C25 26.25 22.2917 23.5417 22.2917 20ZM28.5417 30.4167C18.9583 30.4167 16.0417 37.2917 16.0417 37.2917V40.8333H41.0417V37.2917C41.0417 37.2917 38.125 30.4167 28.5417 30.4167Z"
        fill="white"
      />
      <path
        d="M42.8736 21.9692C45.1432 21.9692 46.9832 20.1293 46.9832 17.8596C46.9832 15.5899 45.1432 13.75 42.8736 13.75C40.6039 13.75 38.764 15.5899 38.764 17.8596C38.764 20.1293 40.6039 21.9692 42.8736 21.9692Z"
        fill="white"
      />
      <path
        d="M42.8736 25.2569C40.901 25.2569 39.4215 25.75 38.2708 26.5719C42.0517 28.3802 43.5311 31.5034 43.5311 31.8322V31.9966H50.2708V29.8596C50.2708 29.6952 48.4626 25.2569 42.8736 25.2569Z"
        fill="white"
      />
      <path
        d="M11.4583 18.3333V33.3333"
        stroke="white"
        strokeWidth="2"
        strokeMiterlimit="10"
      />
      <path
        d="M19 27H4"
        stroke="white"
        strokeWidth="2"
        strokeMiterlimit="10"
      />
    </svg>
  );
};
