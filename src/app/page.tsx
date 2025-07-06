import HomeLayout from "@/components/HomeLayout";

export default function Page() {
  // TODO: fetch info
  const tags = ["Photo Assistant", "Digital Tech", "Retoucher", "Photographer"];
  const navigation = [
    { title: "Find me", href: "/contact" },
    { title: "Assistant", href: undefined },
    { title: "Photographer", href: undefined },
  ];

  return <HomeLayout tags={tags} navigation={navigation} />;
}
