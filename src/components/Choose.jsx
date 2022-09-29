export function Choose({ title, content, ...rest }) {
  return (
    <div className="flex flex-col items-center md:block md:mt-0 mt-8 md:px-0 px-8">
      <img {...rest} className="w-auto mb-8" />
      <h2 className="mb-6 text-xl dark:text-white">{title}</h2>
      <p className="text-gray-400 md:text-start text-center max-w-readable md:max-w-readableDefault">
        {content}
      </p>
    </div>
  );
}
