import clsx from 'clsx';

type PropsType = {
  className?: string;
};
export function UiLogo({ className }: PropsType) {
  return (
    <svg
      className={clsx('fill-white', className)}
      width='92'
      height='55'
      viewBox='0 0 92 55'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M1.01289 0.330856C0.770491 1.87101 0.702782 4.76195 0.876126 6.1649C1.30108 9.60226 2.57692 12.5751 4.73299 15.1518C5.10347 15.5945 5.49712 16.037 5.60776 16.135L5.80892 16.3134L5.75633 15.9114C5.25177 12.0535 4.58058 9.18607 3.42548 5.95461C3.21135 5.35569 3.0084 4.78512 2.9745 4.68673C2.84275 4.304 3.9635 6.44772 4.47101 7.54897C7.59844 14.3353 8.02161 19.4594 5.78218 23.4254L5.45391 24.0068L5.94005 24.0515L6.42618 24.0963L5.99479 24.6308C5.75758 24.9247 5.32288 25.3588 5.02896 25.5954C4.73496 25.8319 4.48308 26.0582 4.46913 26.0983C4.45517 26.1384 5.093 26.7062 5.88647 27.3601L7.32912 28.549L6.62734 28.9944C6.24139 29.2393 5.90722 29.4566 5.88477 29.4773C5.86232 29.4978 6.03146 29.8922 6.26062 30.3536C6.57591 30.9883 6.65104 31.2141 6.56929 31.2819C6.4904 31.3475 6.24076 31.0917 5.64273 30.333L4.82422 29.2943L5.43942 28.8076L6.05472 28.3207L5.87225 28.0645C5.77189 27.9235 5.65731 27.8082 5.6176 27.8082C5.57789 27.8082 5.19229 28.0907 4.76072 28.4359C4.32914 28.7813 3.96645 29.0529 3.95473 29.0397C3.94301 29.0266 3.28398 28.1991 2.49034 27.201C1.6966 26.2029 0.984623 25.3622 0.908058 25.3328C0.695268 25.2512 0.0264002 25.7598 0.000550652 26.0229C-0.0159072 26.1895 0.333644 26.6869 1.44133 28.0733L2.90375 29.9036L2.13381 30.5182C1.71038 30.8562 1.35242 31.1815 1.33847 31.2409C1.32451 31.3005 1.41217 31.4422 1.53319 31.5559L1.75322 31.7626L2.31753 31.306C2.6279 31.0548 2.90912 30.8493 2.94257 30.8493C2.97593 30.8493 3.48273 31.4565 4.06877 32.1985L5.13424 33.5477L4.69659 34.4448C3.9143 36.0481 3.0381 38.3828 2.44195 40.4523L2.2136 41.2449L2.67755 41.7493L3.1415 42.2536L3.15715 43.1033C3.17325 43.9725 3.31162 44.4832 3.62575 44.8321C4.21501 45.4866 5.01089 44.9521 5.41536 43.6303C5.58638 43.0715 5.59792 43.0579 5.92395 43.0302C6.17207 43.0092 6.24514 43.0321 6.20937 43.1197C5.96473 43.7186 5.49962 45.2951 5.35544 46.014C5.18254 46.8767 4.94623 48.9068 5.01116 48.9718C5.04381 49.0045 7.07358 49.3469 7.10641 49.3253C7.11643 49.3187 7.20668 48.7777 7.30694 48.1229C7.62939 46.0191 8.18619 43.8799 8.81409 42.3317L9.00013 41.8731L8.3573 41.8154C8.00372 41.7836 7.50667 41.7342 7.25274 41.7055L6.79112 41.6536L6.88154 41.394C6.98083 41.1091 6.96849 41.1137 8.20542 40.9068C9.06096 40.7637 9.30765 40.6883 8.92053 40.6883C8.80497 40.6883 8.35667 40.6429 7.9242 40.5875C7.09237 40.4808 7.11759 40.4991 7.00149 39.9193L6.94594 39.6423L8.00104 39.8424C8.58135 39.9525 9.22375 40.067 9.42867 40.0969L9.80111 40.1513L10.2683 39.3688C12.2393 36.0673 14.942 33.6056 18.64 31.7435L19.8719 31.1232L20.257 30.2993C20.5498 29.6731 20.615 29.4578 20.529 29.402C20.4666 29.3617 20.1439 29.1631 19.8119 28.9607C19.4799 28.7583 19.2105 28.5672 19.2136 28.5359C19.2165 28.5046 19.8605 27.9577 20.6447 27.3204C21.4288 26.6831 22.0704 26.1329 22.0704 26.0978C22.0704 26.0626 21.938 25.9522 21.7763 25.8522C21.4352 25.6414 20.3603 24.5485 20.2032 24.2528C20.099 24.0566 20.1076 24.0515 20.5467 24.0515C20.7943 24.0515 20.997 24.0279 20.997 23.9989C20.997 23.9701 20.8572 23.6964 20.6863 23.3907C18.3244 19.1673 18.9883 13.5208 22.7154 6.13395C23.1081 5.35569 23.4444 4.73396 23.4627 4.75229C23.4811 4.77072 23.3543 5.16589 23.1811 5.63064C22.8084 6.63073 22.0781 9.01103 21.7646 10.2482C21.2732 12.1874 20.6135 16.0951 20.7538 16.2354C20.8114 16.293 21.8756 15.0697 22.4672 14.2657C24.6597 11.2863 25.741 7.82195 25.7361 3.79282C25.7341 2.24847 25.5313 0.080321 25.3888 0.080321C25.2814 0.080321 23.6563 2.04113 22.8566 3.13567C21.3395 5.21195 20.2722 7.20067 18.4482 11.3504C17.8752 12.654 17.23 14.0048 17.0145 14.3521C16.4234 15.3048 15.5505 16.0645 14.77 16.3053C14.3115 16.4468 14.2096 15.0724 14.6191 14.2714C14.7835 13.9496 14.7295 13.8963 14.4088 14.0639C14.0455 14.2535 13.7001 14.644 13.5007 15.0904C13.29 15.5621 13.2153 15.436 13.2153 14.6088C13.2153 13.9773 13.4285 13.3039 13.7741 12.8433C14.1517 12.3401 14.137 12.3179 13.6043 12.5894C12.6005 13.1009 11.8641 14.1086 11.6808 15.2211C11.5295 16.1403 11.5172 16.1804 11.3889 16.1804C11.1829 16.1804 10.3484 15.5026 9.93501 14.9995C9.42714 14.3814 9.06847 13.6775 7.80229 10.8137C6.23155 7.2614 5.42431 5.71866 4.17494 3.88173C3.52915 2.93218 2.38139 1.47119 1.56109 0.554468L1.06503 0L1.01289 0.330856ZM9.24888 22.2745C8.82098 22.5233 8.60676 23.71 8.84575 24.5075C9.04969 25.1882 9.61355 25.4361 10.0421 25.0335C10.6342 24.4772 10.6198 23.0191 10.0153 22.3297C9.86202 22.1549 9.49968 22.1287 9.24888 22.2745ZM16.3986 22.4484C16.1091 22.7924 16.0341 23.0582 16.0334 23.7413C16.032 25.1031 16.9707 25.758 17.535 24.7889C17.7574 24.4071 17.8327 23.5413 17.6884 23.0258C17.4526 22.1838 16.8487 21.9134 16.3986 22.4484ZM12.7243 25.6624L13.2563 26.2001L13.7459 25.7105C14.0151 25.4412 14.2154 25.2007 14.1908 25.1761C14.1663 25.1515 13.9468 25.1835 13.7031 25.2471C13.3397 25.3419 13.1796 25.3416 12.8128 25.2455C12.5668 25.1811 12.3266 25.1276 12.2789 25.1266C12.2313 25.1257 12.4317 25.3668 12.7243 25.6624ZM7.29952 29.4479L6.8845 29.9148L7.32725 30.6281C7.5708 31.0204 7.79827 31.3895 7.83261 31.4485C7.86705 31.5073 8.53878 31.68 9.32544 31.8322C10.112 31.9842 10.816 32.1326 10.8897 32.1618C10.9635 32.1909 10.7296 32.2799 10.37 32.3594C10.0102 32.439 9.71489 32.5443 9.71364 32.5935C9.7123 32.6427 9.73609 32.8382 9.76641 33.0279C9.81945 33.3595 9.8326 33.3708 10.1097 33.3217C10.2681 33.2936 11.5449 33.1461 12.947 32.9939C14.349 32.8416 15.5565 32.696 15.6303 32.6704C15.7199 32.6391 15.6343 32.5565 15.3717 32.4213L14.979 32.2193L15.8637 31.8807C16.3503 31.6945 17.1098 31.3962 17.5515 31.2179L18.3547 30.8939L18.5078 30.089C18.5919 29.6462 18.6631 29.2111 18.6661 29.1219C18.6698 29.0081 18.3263 29.2418 17.5156 29.9045L16.3597 30.8493H13.2408H10.122L8.98564 29.9102C8.3606 29.3936 7.81893 28.9732 7.7819 28.9759C7.74478 28.9787 7.52769 29.191 7.29952 29.4479ZM19.2528 32.3786C15.8561 34.2569 13.2953 36.521 11.3713 39.3466L10.7928 40.1963L11.2214 40.2555C11.8989 40.3492 14.5018 40.3388 15.6303 40.2379C16.1961 40.1874 17.2769 40.0441 18.0323 39.9196C18.7876 39.7951 19.42 39.7076 19.4376 39.7252C19.4553 39.7428 19.3123 39.9942 19.12 40.2837C18.9277 40.5733 18.7889 40.8401 18.8114 40.8766C18.834 40.913 18.9727 40.9693 19.1197 41.0016C20.013 41.1978 18.3987 41.6478 16.0775 41.8495C15.5118 41.8987 13.8766 41.9393 12.4438 41.9397L9.83859 41.9405L9.45738 42.8573C8.94083 44.1 8.69325 44.8386 8.38565 46.055C7.96141 47.7328 7.66973 49.7956 7.66973 51.1181V51.69L7.06598 51.692C5.9015 51.6957 5.33379 52.1734 5.1278 53.3224L5.06769 53.6578H7.74612H10.4245L10.3759 51.6676L10.3273 49.6775H13.2573H16.1874L16.1225 51.6676L16.0576 53.6578H18.7179H21.3781L21.3348 53.2741C21.2703 52.7016 21.0128 52.2396 20.6094 51.9727C20.3137 51.777 20.1255 51.7291 19.5501 51.7029L18.8503 51.671V50.5338V49.3966L19.633 49.2915C20.0635 49.2337 20.658 49.1432 20.9543 49.0906L21.4932 48.9947L21.4197 48.0391C21.326 46.8184 20.9895 45.1412 20.634 44.1231C20.216 42.9254 20.2253 43.0137 20.517 43.0152C20.8739 43.0172 20.9391 43.0853 21.0707 43.5952C21.4948 45.2371 22.7227 45.637 23.1839 44.2835C23.2684 44.0355 23.3226 43.5648 23.3226 43.0791V42.2817L23.8039 41.7499L24.2851 41.2181L23.8416 39.7681C23.3083 38.0242 22.5753 36.0881 21.9265 34.7099C21.4529 33.7037 20.3871 31.8327 20.2883 31.8339C20.2599 31.8342 19.794 32.0793 19.2528 32.3786ZM5.98236 35.6126C5.87395 36.5102 5.76286 37.3574 5.73549 37.4951L5.68576 37.7455L5.38674 37.5175C5.22234 37.392 5.06071 37.2894 5.02762 37.2894C4.99453 37.2894 4.98174 38.0743 4.99927 39.0336L5.03111 40.7777L4.67333 40.7843C4.47655 40.788 4.14086 40.8182 3.92736 40.8514L3.53917 40.9119L4.60893 41.5604C5.1973 41.917 5.71662 42.2088 5.76304 42.2088C5.80937 42.2088 5.97931 41.4947 6.14058 40.6218C6.30185 39.7489 6.45266 39.0043 6.47564 38.9671C6.49872 38.9299 7.26982 38.8984 8.18932 38.8971L9.86113 38.8949L8.36069 38.1078C7.53548 37.6749 6.82439 37.2835 6.78056 37.2379C6.73673 37.1924 6.59541 36.4527 6.46643 35.594C6.33745 34.7355 6.22019 34.0212 6.20579 34.0067C6.19139 33.9923 6.09085 34.7149 5.98236 35.6126ZM20.1146 35.7017C20.062 36.0092 19.9713 36.5532 19.9132 36.9108L19.8075 37.5607L18.8232 38.2272L17.8389 38.8937L18.9415 38.9189L20.0441 38.9441L20.1964 39.7491C20.2801 40.1919 20.4183 40.9439 20.5035 41.4204L20.6583 42.2866L21.5409 41.6989C22.3365 41.1692 22.5305 40.9576 22.2216 40.9561C22.163 40.9558 21.9602 40.9126 21.7708 40.86L21.4265 40.7644L21.4916 39.0717C21.5272 38.1406 21.5335 37.3788 21.5055 37.3788C21.4774 37.3788 21.3095 37.4643 21.1324 37.5688C20.9554 37.6733 20.7981 37.7438 20.7829 37.7253C20.7678 37.7069 20.6434 37.1183 20.5064 36.4173C20.3696 35.7163 20.2469 35.1427 20.234 35.1427C20.221 35.1427 20.1673 35.3943 20.1146 35.7017Z'
        fill='currentColor'
      />
      <path
        d='M32.4595 53.6578V36.863H26.0128V33.7364H42.2404V36.863H35.7936V53.6578H32.4595ZM48.8357 54.0728C47.3416 54.0728 46.0365 53.7362 44.9206 53.0629C43.8046 52.3896 42.9376 51.4627 42.3197 50.2822C41.711 49.0925 41.4067 47.7275 41.4067 46.1873C41.4067 44.6194 41.7202 43.2452 42.3474 42.0647C42.9745 40.8841 43.8461 39.9618 44.9621 39.2978C46.078 38.6338 47.3692 38.3017 48.8357 38.3017C50.339 38.3017 51.6486 38.6384 52.7646 39.3116C53.8806 39.9849 54.7475 40.9164 55.3654 42.1062C55.9834 43.2867 56.2923 44.6471 56.2923 46.1873C56.2923 47.7367 55.9788 49.1063 55.3516 50.2961C54.7337 51.4766 53.8667 52.4035 52.7508 53.0767C51.6348 53.7408 50.3298 54.0728 48.8357 54.0728ZM48.8357 50.9463C50.1638 50.9463 51.1506 50.5036 51.7962 49.6182C52.4418 48.7328 52.7646 47.5891 52.7646 46.1873C52.7646 44.7393 52.4372 43.5864 51.7824 42.7287C51.1275 41.8618 50.1453 41.4283 48.8357 41.4283C47.941 41.4283 47.2032 41.6312 46.6222 42.037C46.0504 42.4336 45.6261 42.9916 45.3494 43.7109C45.0727 44.4211 44.9344 45.2465 44.9344 46.1873C44.9344 47.6353 45.2618 48.7927 45.9166 49.6597C46.5807 50.5174 47.5537 50.9463 48.8357 50.9463ZM65.3307 54.0728C63.9565 54.0728 62.7575 53.727 61.7338 53.0352C60.71 52.3435 59.9168 51.4028 59.3543 50.2131C58.7917 49.0233 58.5104 47.6814 58.5104 46.1873C58.5104 44.6747 58.7917 43.3282 59.3543 42.1477C59.9261 40.9579 60.7331 40.0218 61.7753 39.3393C62.8174 38.6476 64.0441 38.3017 65.4552 38.3017C66.8755 38.3017 68.0652 38.6476 69.0244 39.3393C69.9928 40.0218 70.726 40.9579 71.2241 42.1477C71.7221 43.3374 71.9711 44.6839 71.9711 46.1873C71.9711 47.6722 71.7221 49.0141 71.2241 50.2131C70.726 51.4028 69.9836 52.3435 68.9967 53.0352C68.0099 53.727 66.7879 54.0728 65.3307 54.0728ZM65.8425 51.0846C66.7371 51.0846 67.4565 50.8817 68.0007 50.4759C68.5541 50.0609 68.9552 49.4844 69.2043 48.7466C69.4625 48.0088 69.5916 47.1557 69.5916 46.1873C69.5916 45.2097 69.4625 44.3565 69.2043 43.6279C68.9552 42.8901 68.5633 42.3183 68.0283 41.9125C67.4934 41.4975 66.8017 41.2899 65.9532 41.2899C65.0586 41.2899 64.3208 41.5113 63.7397 41.954C63.1587 42.3875 62.7298 42.9777 62.4531 43.7248C62.1764 44.4626 62.0381 45.2834 62.0381 46.1873C62.0381 47.1003 62.1718 47.9304 62.4393 48.6774C62.716 49.4153 63.1356 50.0009 63.6982 50.4344C64.2608 50.8679 64.9756 51.0846 65.8425 51.0846ZM69.5916 53.6578V43.1714H69.1766V33.7364H72.5383V53.6578H69.5916ZM83.0161 54.0728C81.522 54.0728 80.2169 53.7362 79.101 53.0629C77.985 52.3896 77.118 51.4627 76.5001 50.2822C75.8914 49.0925 75.5871 47.7275 75.5871 46.1873C75.5871 44.6194 75.9006 43.2452 76.5278 42.0647C77.1549 40.8841 78.0265 39.9618 79.1425 39.2978C80.2584 38.6338 81.5496 38.3017 83.0161 38.3017C84.5194 38.3017 85.829 38.6384 86.945 39.3116C88.061 39.9849 88.9279 40.9164 89.5458 42.1062C90.1638 43.2867 90.4727 44.6471 90.4727 46.1873C90.4727 47.7367 90.1592 49.1063 89.532 50.2961C88.9141 51.4766 88.0471 52.4035 86.9312 53.0767C85.8152 53.7408 84.5102 54.0728 83.0161 54.0728ZM83.0161 50.9463C84.3442 50.9463 85.331 50.5036 85.9766 49.6182C86.6222 48.7328 86.945 47.5891 86.945 46.1873C86.945 44.7393 86.6176 43.5864 85.9628 42.7287C85.3079 41.8618 84.3257 41.4283 83.0161 41.4283C82.1214 41.4283 81.3836 41.6312 80.8026 42.037C80.2308 42.4336 79.8065 42.9916 79.5298 43.7109C79.2531 44.4211 79.1148 45.2465 79.1148 46.1873C79.1148 47.6353 79.4422 48.7927 80.097 49.6597C80.7611 50.5174 81.7341 50.9463 83.0161 50.9463Z'
        fill='currentColor'
      />
    </svg>
  );
}