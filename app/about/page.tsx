"use client";

import Navbar from "../Components/navbar";

export default function About() {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-800">
      <Navbar />

      <div className="max-w-4xl mx-auto p-6 sm:p-8 lg:p-12">
        {/* Titre */}
        <h1 className="text-4xl font-bold mb-8 text-center text-gray-900">
          À propos du projet
        </h1>

        {/* Description du projet */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">
            Qu'est-ce que ce projet ?
          </h2>
          <p className="text-lg leading-relaxed mb-4">
            Ce site est une **visualisation interactive du budget de l'État
            français pour 2026**. Il permet de comprendre comment les ressources
            publiques sont allouées entre les différents ministères et secteurs
            clés.
          </p>
          <p className="text-lg leading-relaxed">
            Grâce à un **graphique en camembert**, vous pouvez voir d'un coup
            d'œil les priorités budgétaires du gouvernement, comme l'éducation,
            la défense, la santé, ou encore la transition écologique.
          </p>
        </section>

        {/* Sources des données */}
        <section className="mb-10 bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">
            Sources des données
          </h2>
          <p className="text-lg leading-relaxed mb-4">
            Les données utilisées proviennent :
            <a
              className="hover:text-amber-500"
              href="
              https://www.budget.gouv.fr/budget-etat/ministere?annee=247&loi_finances=47&type_budget=43&type_donnee_budget=ae&op=Valider"
              target="_blank"
            >
              budget.gouv.fr
            </a>
          </p>
          <ul className="list-disc list-inside space-y-2 text-lg">
            <li>
              <strong>Projet de Loi de Finances (PLF) 2026</strong> : Budget
              officiel de l'État français, disponible dans
              <a
                href="https://www.legifrance.gouv.fr/jorf/id/JORFTEXT000053508155"
                className="text-blue-600 hover:underline ml-1"
                target="_blank"
                rel="noopener noreferrer"
              >
                le texte de loi officiel du PLF
              </a>
              .
            </li>
            <li>
              <strong>Rapports de la Cour des comptes</strong> : Pour les
              analyses et vérifications des dépenses publiques.
            </li>
            <li>
              <strong>Données ouvertes (Open Data)</strong> : Certaines données
              sont issues de plateformes comme
              <a
                href="https://www.data.gouv.fr"
                className="text-blue-600 hover:underline ml-1"
                target="_blank"
                rel="noopener noreferrer"
              >
                data.gouv.fr
              </a>
              .
            </li>
          </ul>
          <p className="mt-4 text-sm text-gray-600">
            Les montants sont exprimés en{" "}
            <strong>milliards d'euros (Md€)</strong> et sont arrondis pour plus
            de lisibilité.
          </p>
        </section>

        {/* À propos de toi / de l'équipe */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">
            Qui suis-je ?
          </h2>
          <div className="flex flex-col sm:flex-row items-center gap-6">
            <div>
              <p className="text-lg leading-relaxed mb-2">
                Je m'appelle <strong>Paul Charbel</strong>, et je suis passionné
                par la <strong>visualisation de données</strong> et les enjeux
                économiques.
              </p>
              <p className="text-lg leading-relaxed">
                Ce projet a été réalisé avec <strong>Next.js</strong> et{" "}
                <strong>Recharts</strong> pour rendre les données budgétaires
                accessibles à tous. N'hésitez pas à me contacter pour toute
                question ou suggestion !
              </p>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Contact</h2>
          <p className="text-lg leading-relaxed mb-4">
            Pour toute question, suggestion ou collaboration, vous pouvez me
            contacter via :
          </p>
          <ul className="list-disc list-inside space-y-2 text-lg">
            <li>
              LinkedIn :{" "}
              <a
                href="https://www.linkedin.com/in/paul-charbel/"
                className="text-blue-600 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Paul Charbel
              </a>
            </li>
            <li>
              GitHub :{" "}
              <a
                href="https://github.com/sirmaccready"
                className="text-blue-600 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                sirmaccready
              </a>
            </li>
          </ul>
        </section>
        <p className="text-xs text-gray-400">
          *Une intelligence artificielle a été utilisée de manière limitée pour
          aider à la création de cette visualisation.
        </p>
      </div>
    </main>
  );
}
