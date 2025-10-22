const Divider = () => {
  return (
    <div className="flex items-center justify-center py-12">
      <div className="flex items-center gap-4">
        <div className="h-px w-16 bg-gradient-to-r from-transparent to-primary"></div>
        <div className="w-2 h-2 rounded-full bg-primary"></div>
        <div className="w-3 h-3 rounded-full bg-primary animate-pulse"></div>
        <div className="w-2 h-2 rounded-full bg-primary"></div>
        <div className="h-px w-16 bg-gradient-to-l from-transparent to-primary"></div>
      </div>
    </div>
  );
};

export default Divider;
