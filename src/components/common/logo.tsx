import Graphic from 'assets/perch_logo.png';

const Logo = ({
  height
}: {
  height?: number
}) => {
  return (
    <div className={`flex`}>
      <img src={Graphic} alt="logo" className={`m-auto h-${height ?? '20'} w-auto`} />
    </div>
  );
};

export default Logo;
