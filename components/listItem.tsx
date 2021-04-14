interface ListItemProps {
  title: string;
  icon: string;
  href?: string;
}

export const ListItem = ({ title, icon, href }: ListItemProps) => {
  return (
    <li className="text-xl font-medium mb-2">
      <i className={`mr-2 fa fa-${icon}`}></i>
      {href ? (
        <a href={href} target="_blank">
          {title}
        </a>
      ) : (
        <span>{title}</span>
      )}
    </li>
  );
};
