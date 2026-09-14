// Importa usando os links diretos da internet (CDN)
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-analytics.js";

// Sua configuração do Firebase
const firebaseConfig = {
  apiKey: "AIzaSyCUIIN9NLD3TcSJ78r22UbkMFVGs3D7ryE",
  authDomain: "expediemfluxo.firebaseapp.com",
  projectId: "expediemfluxo",
  storageBucket: "expediemfluxo.firebasestorage.app",
  messagingSenderId: "1075886554719",
  appId: "1:1075886554719:web:6dff17a3b6874f1cc925ea",
  measurementId: "G-18WKK75YLX"
};

// Inicializa o Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Exporta para usar nas outras telas
export { app, analytics };
