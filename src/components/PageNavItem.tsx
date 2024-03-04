type Props = {
  title: string;
  description: string;
};

export default function PageNavItem({ title, description }: Props) {
  return (
    <>
      <h2 className="text-2xl font-bold">{title}</h2>
      <p className="text-lg font-semibold">{description}</p>
    </>
  );
}
