export function Articles({ creator, title, content, ...rest }) {
  return (
    <div className="flex flex-col gap-2">
      <img {...rest} className="rounded-t-md" />
      <span className="text-xs px-8 text-gray-400 mt-4">{creator}</span>
      <a href="#" className="px-8 hover:text-gray-500 dark:text-white">
        {title}
      </a>
      <p className="text-sm px-8 text-gray-400 mb-12 md:mb-0">{content}</p>
    </div>
  );
}
