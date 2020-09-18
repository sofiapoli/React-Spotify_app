export const initialState = {
    user: null,
    playLists: [],
    playing: false,
    item: null,
    //volver a ponerle valor null
    token:null ,

    //' BQB2r3wytt3pGR4o6LavssZxB9l5nTkwIemfR4zvE5h-we4_r8E0LXUX8TORB3npph7SLNN2J2klM3LJXJY21I81YDUdiiBMXZpaYsQIVSzBW_tFFjAWHcXCw_-mFBi-HKPjR0htfXpr7hU86ZntZKDEslW9_B5pPjijqcTxrup68gQHxJ7S'
};

const reducer = (state, action) =>{
console.log(action);

 switch(action.type) {
     case 'SET_USER':
         return {
             ...state,
             user: action.user
         };
      case "SET_TOKEN":
          return{
              ...state,
              token: action.token
          };
    default: 
      return state;
 }
}

export default reducer;