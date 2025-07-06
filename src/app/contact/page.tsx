import ContactLayout from "@/components/ContactLayout";

export default function Page() {
  // TODO: fetch info
  const tags = ["Photo Assistant", "Digital Tech", "Retoucher", "Photographer"];
  const navigation = [
    { title: "Home", href: "/" },
    { title: "Assistant", href: undefined },
    { title: "Photographer", href: undefined },
  ];

  return <ContactLayout tags={tags} navigation={navigation} />;
}
