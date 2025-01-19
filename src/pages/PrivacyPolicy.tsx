import { Link } from 'react-router-dom';
import { HelpBuoyOutline } from 'react-ionicons'

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-green-50 to-white">
      <nav className="bg-green-600 p-4 shadow-lg">
        <div className="container mx-auto max-w-4xl px-4">
          <Link 
            to="/" 
            className="inline-flex items-center text-white hover:text-green-100 text-xs gap-1 opacity-75 hover:opacity-100 transition-all"
          >
            ←
            <span>back</span>
          </Link>
        </div>
      </nav>

      <main className="container mx-auto px-4 py-12 max-w-3xl">
        <h1 className="text-4xl font-bold mb-4 text-gray-900">Privacy Policy</h1>
        <p className="text-gray-500 mb-12 text-lg">Last updated: March 19, 2024</p>

        <div className="prose prose-lg max-w-none">
          <p>
            Surrender was built as a Free app. This SERVICE is provided at no cost and is intended for use as is.
          </p>

          <p>
            This page is used to inform visitors regarding our policies with the collection, use, and disclosure 
            of Personal Information if anyone decided to use our Service.
          </p>

          <p>
            If you choose to use our Service, then you agree to the collection and use of information in relation 
            to this policy. The Personal Information that we collect is used for providing and improving the Service. 
            We will not use or share your information with anyone except as described in this Privacy Policy.
          </p>

          <h2>Information Collection and Use</h2>
          <p>
            For a better experience, while using our Service, we may require you to provide us with certain 
            personally identifiable information, including but not limited to name. The information that we request 
            will be retained by us and used as described in this privacy policy.
          </p>

          <h2>Log Data</h2>
          <p>
            We want to inform you that whenever you use our Service, in a case of an error in the app we collect 
            data and information (through third party products) called Log Data. This Log Data may include 
            information such as your device Internet Protocol ("IP") address, device name, operating system version, 
            the configuration of the app when utilizing our Service, the time and date of your use of the Service, 
            and other statistics.
          </p>

          <h2>Security</h2>
          <p>
            We value your trust in providing us your Personal Information, thus we are striving to use commercially 
            acceptable means of protecting it. But remember that no method of transmission over the internet, or 
            method of electronic storage is 100% secure and reliable, and we cannot guarantee its absolute security.
          </p>

          <h2>Links to Other Sites</h2>
          <p>
            This Service may contain links to other sites. If you click on a third-party link, you will be directed 
            to that site. Note that these external sites are not operated by us. Therefore, we strongly advise you 
            to review the Privacy Policy of these websites. We have no control over and assume no responsibility for 
            the content, privacy policies, or practices of any third-party sites or services.
          </p>

          <h2>Changes to This Privacy Policy</h2>
          <p>
            We may update our Privacy Policy from time to time. Thus, you are advised to review this page 
            periodically for any changes. We will notify you of any changes by posting the new Privacy Policy on 
            this page.
          </p>

          <p>This policy is effective as of 2024-03-19</p>

          <h2>Contact Us</h2>
          <p>
            If you have any questions or suggestions about our Privacy Policy, do not hesitate to contact us at{' '}
            <a href="mailto:contact@surrender.app" className="text-green-600 hover:text-green-700">
              contact@surrender.app
            </a>
          </p>
        </div>
      </main>
    </div>
  );
}