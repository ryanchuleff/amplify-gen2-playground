import { useIsFetching } from '@tanstack/react-query'

const GlobalLoadingIndicator = () => {
  const isFetching = useIsFetching();

  return isFetching ? (
    <div className={`mb-5 h-2 overflow-hidden bg-gray-200 duration-500 delay-0`}>
      <div className="h-2 animate-pulse bg-gray-800 w-full">
        <div className="h-full w-full translate-x-full transform bg-white">
        </div>
      </div>
    </div>
  ) : null;
}

export default GlobalLoadingIndicator;
