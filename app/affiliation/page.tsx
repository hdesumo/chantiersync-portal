import AffiliateForm from "@/components/AffiliateForm";

export default function AffiliatePage() {
  return (
    <main className="flex flex-col items-center justify-center py-10 px-4">
      <h1 className="text-3xl font-bold mb-6">Programme d’affiliation</h1>
      <p className="mb-6 text-center max-w-lg">
        Rejoignez notre programme d’affiliation et bénéficiez de nombreux avantages.
        Remplissez le formulaire ci-dessous, et vous recevrez vos identifiants
        d’accès une fois votre demande validée par notre équipe.
      </p>
      <AffiliateForm />
    </main>
  );
}
