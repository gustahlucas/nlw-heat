import { useEffect } from 'react';
import { api } from '../../services/api'

import styles from './styles.module.scss'; 


export function MessageList() {
  useEffect(() => {
    //chama api 
    api.get("messages/last3").then(response => {
      console.log(response.data); 
    })
  }, [])

  return (
    <div className={styles.messageListWrapper}>
      <svg width="280" height="24" fill="none">
        <path fillRule="evenodd" d="M47.623 12.006c.002 2.363-.71 4.674-2.046 6.64s-3.236 3.499-5.46 4.405a12.38 12.38 0 0 1-7.032.684c-2.362-.46-4.531-1.597-6.234-3.268s-2.863-3.799-3.333-6.117a11.73 11.73 0 0 1-.23-2.005c-.088 2.909-1.303 5.681-3.406 7.745-2.184 2.144-5.146 3.349-8.235 3.349H0V.572h11.646c3.089 0 6.051 1.205 8.235 3.349 2.105 2.066 3.321 4.842 3.406 7.755a11.76 11.76 0 0 1 .921-4.23c.921-2.184 2.481-4.05 4.482-5.363S33.045.067 35.453.067c3.224.005 6.316 1.264 8.596 3.502s3.566 5.271 3.574 8.437zM78.145.572l-3.309 11.957-3.3-11.957H65.46l-3.348 11.995L58.803.572h-9.375l8.269 22.866h7.764l3.047-9.27 3.028 9.27H79.3L87.52.572h-9.375zm33.929 0v22.866h-8.832v-8.184H97.74v8.184h-8.832V.572h8.832v8.184h5.512V.572h8.822zm3.309 0v22.866h8.822V.572h-8.822zm28.135 16.321v6.545h-16.004V.572h8.832v16.359l7.172-.038zm11.025-7.632V7.079l7.172.038V.572h-15.994v22.866h15.994v-6.545h-7.172v-2.182h5.522v-5.45h-5.522z" fill="url(#A)"/>
        <path d="M189.646.715l-3.144-.467c-.097 0-.194 0-.194.086l-1.34 1.686a.61.61 0 0 0-.087.372c0 .095-.097.286-.194.191l-1.048-.276c-.194 0-.379 0-.476.181l-4.289 5.431c-.098.095-.195.095-.379.095l-1.621-.753a.43.43 0 0 0-.475 0l-.864.562a.42.42 0 0 1-.238.073.43.43 0 0 1-.238-.073l-.378-.191c-.063-.027-.131-.042-.199-.042a.51.51 0 0 0-.2.04.49.49 0 0 0-.271.288l-.281 1.305a.69.69 0 0 0 .021.419c.05.134.141.251.26.333l.767.467 1.999 1.22.971.562a.74.74 0 0 0 .443.089c.153-.017.297-.082.411-.185l1.621-1.401a.74.74 0 0 1 .485-.095l.475.276c.185.095.379.095.476-.095l.854-.743a.42.42 0 0 1 .222-.122c.085-.017.174-.008.254.027l1.242.562c.194.095.378 0 .572-.095l.573-.743 4.29-5.431c.184-.286.097-.657-.292-.657l-.97-.181c-.194 0-.282-.286-.194-.476l1.533-1.772c.194-.191.088-.467-.097-.467zM175.38 11.662c-.097-.095-.194 0-.194.095l.475 1.21v.286l-.378 1.591c-.007.05-.001.101.016.149a.33.33 0 0 0 .081.127l1.135.848c.056.042.124.064.194.064s.139-.023.194-.064l1.233-1.029a.36.36 0 0 1 .291-.096l1.33-.191c.097 0 .097-.095 0-.191l-4.377-2.801zm-.418 4.02c-.016-.022-.037-.039-.061-.051a.18.18 0 0 0-.079-.018c-.028 0-.055.006-.079.018a.18.18 0 0 0-.062.051l-.97.467c-.026 0-.051.01-.069.028s-.029.042-.029.067l-2.096 5.05h.097l.476-.181v.095l-1.524 2.429c0 .095 0 .095.087.095l5.338-5.335c.097 0 .097-.095.097-.191l.097-1.401c0-.095 0-.191-.097-.191l-1.126-.934zm41.635 1.211v6.545h-21.506s10.229-11.033 11.578-13.624c1.067-2.039-.068-3.268-1.107-3.268s-2.203.581-2.203 3.268l-8.2-.543c0-5.107 3.649-9.261 10.403-9.261 6.512 0 10.482 3.373 10.482 8.175 0 2.992-2.621 6.403-5.513 8.718l6.066-.009zm24.263-4.888c0 6.612-4.455 11.995-11.035 11.995S218.8 18.618 218.8 12.005 223.245.02 229.825.02s11.035 5.316 11.035 11.986zm23.709 4.888v6.545h-21.506s10.229-11.033 11.578-13.624c1.067-2.039-.068-3.268-1.107-3.268s-2.203.581-2.203 3.268l-8.2-.543c0-5.107 3.649-9.261 10.403-9.261 6.513 0 10.482 3.373 10.482 8.175 0 2.992-2.62 6.403-5.513 8.718l6.066-.009zM280 0v23.438h-8.822V8.194l-3.882.476V2.096L280 0z" fill="#fff"/>
        <defs><linearGradient id="A" x1="0" y1=".634" x2="50.816" y2="88.269" gradientUnits="userSpaceOnUse"><stop stopColor="#ff008e"/><stop offset="1" stopColor="#ffcd1e"/></linearGradient></defs>
      
      </svg>


      <ul className={styles.messageList}>
        <li className={styles.message}>
          <p className={styles.messageContent}> Não vejo a hora de começar esse evento, com certeza vai ser o melhor de todos os tempos, vamooo pra cima! 🔥🔥</p>
          <div className={styles.messageUser}></div>
          <div className={styles.userImage}>
            <img src="https://github.com/gustahlucas.png" alt="Gustavo Lucas" />
          </div>
          <span> Gustavo Lucas </span>
        </li>
        <li className={styles.message}>
          <p className={styles.messageContent}> Não vejo a hora de começar esse evento, com certeza vai ser o melhor de todos os tempos, vamooo pra cima! 🔥🔥</p>
          <div className={styles.messageUser}></div>
          <div className={styles.userImage}>
            <img src="https://github.com/gustahlucas.png" alt="Gustavo Lucas" />
          </div>
          <span> Gustavo Lucas </span>
        </li>
        <li className={styles.message}>
          <p className={styles.messageContent}> Não vejo a hora de começar esse evento, com certeza vai ser o melhor de todos os tempos, vamooo pra cima! 🔥🔥</p>
          <div className={styles.messageUser}></div>
          <div className={styles.userImage}>
            <img src="https://github.com/gustahlucas.png" alt="Gustavo Lucas" />
          </div>
          <span> Gustavo Lucas </span>
        </li>
      </ul>
    </div>
  )
}