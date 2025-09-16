import AffiliateForm from "@/components/AffiliateForm";

export default function AffiliationPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12 px-4">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
          Programme d&apos;affiliation
        </h1>
        <p className="text-gray-700 dark:text-gray-300 mb-8">
          Rejoignez notre programme d&apos;affiliation et bénéficiez de nombreux avantages. 
          Remplissez le formulaire ci-dessous, et vous recevrez vos identifiants d&apos;accès 
          une fois votre demande validée par notre équipe.
        </p>
      </div>

      <div className="max-w-md mx-auto bg-white dark:bg-gray-800 shadow-md rounded-lg p-6">
        <AffiliateForm />
      </div>
    </div>
  );
}
