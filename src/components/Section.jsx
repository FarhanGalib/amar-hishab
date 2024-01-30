const Section = ({
  children,
  title,
  wrapperClass = '',
  titleClass = '',
  contentClass = '',
}) => {
  return (
    <section className={`py-2 ${wrapperClass}`}>
      {title && (
        <p className={`mb-1 text-gray-500 font-bold ${titleClass}`}>{title}</p>
      )}
      <div className={contentClass}>{children}</div>
    </section>
  );
};

export default Section;
