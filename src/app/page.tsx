import VaultManager from "@/components/password-manager/Vault";

export default function page() {
  // Vault manager contains little logic so everything there is a client component but I still opted to extract it away into VaultManager isntead of just dumping the logic here in page.tsx so the page can get server side rendered and the VaultManager can be client side rendered.
  return <VaultManager />;
}
