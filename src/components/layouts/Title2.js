const Title2 = ({ des, className = "" }) => {
  return (
    <div className={`flex flex-col font-titleFont mb-14 ${className}`}>
      <h1 className="text-xl font-bold capitalize md:text-2xl">
        {des}
      </h1>
    </div>
  );
};

export default Title2;