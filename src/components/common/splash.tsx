import PerchLogo from './logo';

const Splash = ({ 
  text
}: {
  text?: string
}) => {
  return (
    <div className={`fixed inset-0 flex items-center justify-center bg-slate-100 text-zinc-950 z-1300`}>
      <div className={`flex flex-col text-center gap-y-4`}>
        <PerchLogo height={40} />
        <h1>{text || 'Welcome to Perch...'}</h1>
      </div>
    </div>
  )
};

export default Splash;
