type ServiceOfferingProps = {
  name: string;
  description: string;
  buttonText: string;
};

export default function ServiceOffering({
  name,
  description,
  buttonText,
}: ServiceOfferingProps) {
  return (
    <div>
      <h3>{name}</h3>
      <p>{description}</p>
      <button>{buttonText}</button>
    </div>
  );
}
