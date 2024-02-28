const SpotlightJS = (props) => {
    return (
      <div className="bg-slate-400 w-full min-h-[200px] mt-4">
        <div>{`Total Pokemon: ${props.totalPokemon}`}</div>
        <div>SpotlightJS</div>
      </div>
    );
  }
  
  export default SpotlightJS;