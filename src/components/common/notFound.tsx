import PerchLogo from './logo';

const NotFound = () => {
  return (
    <div className={`fixed inset-0 flex items-center justify-center bg-slate-100 text-zinc-950 z-1300`}>
      <div className={`flex flex-col text-center gap-y-4`}>
        <PerchLogo height={40} />
        <h1>Yeep!</h1>
        <h3>The page your looking for doesn't exist!</h3>
      </div>
    </div>
  )
};

export default NotFound;
