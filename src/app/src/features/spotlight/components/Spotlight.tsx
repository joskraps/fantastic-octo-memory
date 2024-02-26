type SpotlightProps = {
  totalPokemon: number;
};

// This component finds five random pokemon and displays their id, name, and image
function Spotlight(props: SpotlightProps) {
  return (
    <div className="bg-slate-400 w-full min-h-[200px] mt-4">
      <div>{`Total Pokemon: ${props.totalPokemon}`}</div>
      <div>Spotlight</div>
    </div>
  );
}

export default Spotlight;
