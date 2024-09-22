export const SectionHeadline = ({ title }: {title: string}) => {
    return (
        <div className="mb-8 sm:mb-12 flex items-center justify-start">
          <div className="w-8 h-8 sm:w-4 sm:h-4 rounded-full bg-blue-500 mr-3 sm:mr-4"></div>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">{title}</h2>
        </div>
      );
}