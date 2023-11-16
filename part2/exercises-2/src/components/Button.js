import './styles.css';

function Button() {

   function onLearnMore() {
      alert("Splish Splash!");
   }

   return ( 
         <button onClick={onLearnMore}>
            learn more
         </button>
   );
}

export default Button;