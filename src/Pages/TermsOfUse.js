import React from "react";

const TermsOfUse = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <main className="terms-container" id="top">
      <h1 className="terms-title">Terms of Use</h1>
      <ol className="terms-list">
        {/* Corrections */}
        <li className="terms-section" id="S18">
          <h2 className="terms-heading">Corrections</h2>
          <p className="terms-text">
            There may be information on the Site that contains typographical
            errors, inaccuracies, or omissions, including descriptions, pricing,
            availability, and various other information. We reserve the right to
            correct any errors, inaccuracies, or omissions and to change or
            update the information on the Site at any time, without prior
            notice.
          </p>
          <div className="back-to-top-container">
            <button className="back-to-top-link" onClick={scrollToTop}>
              Back to Top
            </button>
          </div>
        </li>

        {/* Disclaimer */}
        <li className="terms-section" id="S19">
          <h2 className="terms-heading">Disclaimer</h2>
          <p className="terms-text">
            THE SITE IS PROVIDED ON AN AS-IS AND AS-AVAILABLE BASIS. YOU AGREE
            THAT YOUR USE OF THE SITE AND OUR SERVICES WILL BE AT YOUR SOLE
            RISK. TO THE FULLEST EXTENT PERMITTED BY LAW, WE DISCLAIM ALL
            WARRANTIES, EXPRESS OR IMPLIED, IN CONNECTION WITH THE SITE AND YOUR
            USE THEREOF, INCLUDING, WITHOUT LIMITATION, THE IMPLIED WARRANTIES
            OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND
            NON-INFRINGEMENT. WE MAKE NO WARRANTIES OR REPRESENTATIONS ABOUT THE
            ACCURACY OR COMPLETENESS OF THE SITE'S CONTENT OR THE CONTENT OF ANY
            WEBSITES LINKED TO THE SITE AND WE WILL ASSUME NO LIABILITY OR
            RESPONSIBILITY FOR ANY (1) ERRORS, MISTAKES, OR INACCURACIES OF
            CONTENT AND MATERIALS, (2) PERSONAL INJURY OR PROPERTY DAMAGE, OF
            ANY NATURE WHATSOEVER, RESULTING FROM YOUR ACCESS TO AND USE OF THE
            SITE, (3) ANY UNAUTHORIZED ACCESS TO OR USE OF OUR SECURE SERVERS
            AND/OR ANY AND ALL PERSONAL INFORMATION AND/OR FINANCIAL INFORMATION
            STORED THEREIN, (4) ANY INTERRUPTION OR CESSATION OF TRANSMISSION TO
            OR FROM THE SITE, (5) ANY BUGS, VIRUSES, TROJAN HORSES, OR THE LIKE
            WHICH MAY BE TRANSMITTED TO OR THROUGH THE SITE BY ANY THIRD PARTY,
            AND/OR (6) ANY ERRORS OR OMISSIONS IN ANY CONTENT AND MATERIALS OR
            FOR ANY LOSS OR DAMAGE OF ANY KIND INCURRED AS A RESULT OF THE USE
            OF ANY CONTENT POSTED, TRANSMITTED, OR OTHERWISE MADE AVAILABLE VIA
            THE SITE. WE DO NOT WARRANT, ENDORSE, GUARANTEE, OR ASSUME
            RESPONSIBILITY FOR ANY PRODUCT OR SERVICE ADVERTISED OR OFFERED BY A
            THIRD PARTY THROUGH THE SITE, ANY HYPERLINKED WEBSITE, OR ANY
            WEBSITE OR MOBILE APPLICATION FEATURED IN ANY BANNER OR OTHER
            ADVERTISING, AND WE WILL NOT BE A PARTY TO OR IN ANY WAY BE
            RESPONSIBLE FOR MONITORING ANY TRANSACTION BETWEEN YOU AND ANY
            THIRD-PARTY PROVIDERS OF PRODUCTS OR SERVICES. AS WITH THE PURCHASE
            OF A PRODUCT OR SERVICE THROUGH ANY MEDIUM OR IN ANY ENVIRONMENT,
            YOU SHOULD USE YOUR BEST JUDGMENT AND EXERCISE CAUTION WHERE
            APPROPRIATE.
          </p>
          <div className="back-to-top-container">
            <button className="back-to-top-link" onClick={scrollToTop}>
              Back to Top
            </button>
          </div>
        </li>

        {/* Limitations of Liability */}
        <li className="terms-section" id="S20">
          <h2 className="terms-heading">Limitations of Liability</h2>
          <p className="terms-text">
            IN NO EVENT WILL WE OR OUR DIRECTORS, EMPLOYEES, OR AGENTS BE LIABLE
            TO YOU OR ANY THIRD PARTY FOR ANY DIRECT, INDIRECT, CONSEQUENTIAL,
            EXEMPLARY, INCIDENTAL, SPECIAL, OR PUNITIVE DAMAGES, INCLUDING LOST
            PROFIT, LOST REVENUE, LOSS OF DATA, OR OTHER DAMAGES ARISING FROM
            YOUR USE OF THE SITE, EVEN IF WE HAVE BEEN ADVISED OF THE
            POSSIBILITY OF SUCH DAMAGES. NOTWITHSTANDING ANYTHING TO THE
            CONTRARY CONTAINED HEREIN, OUR LIABILITY TO YOU FOR ANY CAUSE
            WHATSOEVER AND REGARDLESS OF THE FORM OF THE ACTION, WILL AT ALL
            TIMES BE LIMITED TO THE LESSER OF THE AMOUNT PAID, IF ANY, BY YOU TO
            US DURING THE SIX (6) MONTH PERIOD PRIOR TO ANY CAUSE OF ACTION
            ARISING OR $1,500.00 USD. CERTAIN US STATE LAWS AND INTERNATIONAL
            LAWS DO NOT ALLOW LIMITATIONS ON IMPLIED WARRANTIES OR THE EXCLUSION
            OR LIMITATION OF CERTAIN DAMAGES. IF THESE LAWS APPLY TO YOU, SOME
            OR ALL OF THE ABOVE DISCLAIMERS OR LIMITATIONS MAY NOT APPLY TO YOU,
            AND YOU MAY HAVE ADDITIONAL RIGHTS.
          </p>
          <div className="back-to-top-container">
            <button className="back-to-top-link" onClick={scrollToTop}>
              Back to Top
            </button>
          </div>
        </li>

        {/* Indemnification */}
        <li className="terms-section" id="S21">
          <h2 className="terms-heading">Indemnification</h2>
          <p className="terms-text">
            You agree to defend, indemnify, and hold us harmless, including our
            subsidiaries, affiliates, and all of our respective officers,
            agents, partners, and employees, from and against any loss, damage,
            liability, claim, or demand, including reasonable attorneys' fees
            and expenses, made by any third party due to or arising out of: (1)
            use of the Site; (2) breach of these Terms of Use; (3) any breach of
            your representations and warranties set forth in these Terms of Use;
            (4) your violation of the rights of a third party, including but not
            limited to intellectual property rights; or (5) any overt harmful
            act toward any other user of the Site with whom you connected via
            the Site. Notwithstanding the foregoing, we reserve the right, at
            your expense, to assume the exclusive defense and control of any
            matter for which you are required to indemnify us, and you agree to
            cooperate, at your expense, with our defense of such claims. We will
            use reasonable efforts to notify you of any such claim, action, or
            proceeding which is subject to this indemnification upon becoming
            aware of it.
          </p>
          <div className="back-to-top-container">
            <button className="back-to-top-link" onClick={scrollToTop}>
              Back to Top
            </button>
          </div>
        </li>

        {/* User Data */}
        <li className="terms-section" id="S22">
          <h2 className="terms-heading">User Data</h2>
          <p className="terms-text">
            We will maintain certain data that you transmit to the Site for the
            purpose of managing the performance of the Site, as well as data
            relating to your use of the Site. Although we perform regular
            routine backups of data, you are solely responsible for all data
            that you transmit or that relates to any activity you have
            undertaken using the Site. You agree that we shall have no liability
            to you for any loss or corruption of any such data, and you hereby
            waive any right of action against us arising from any such loss or
            corruption of such data.
          </p>
          <div className="back-to-top-container">
            <button className="back-to-top-link" onClick={scrollToTop}>
              Back to Top
            </button>
          </div>
        </li>

        {/* Electronic Communications, Transactions, and Signatures */}
        <li className="terms-section" id="S23">
          <h2 className="terms-heading">
            Electronic Communications, Transactions, and Signatures
          </h2>
          <p className="terms-text">
            Visiting the Site, sending us emails, and completing online forms
            constitute electronic communications. You consent to receive
            electronic communications, and you agree that all agreements,
            notices, disclosures, and other communications we provide to you
            electronically, via email and on the Site, satisfy any legal
            requirement that such communication be in writing. YOU HEREBY AGREE
            TO THE USE OF ELECTRONIC SIGNATURES, CONTRACTS, ORDERS, AND OTHER
            RECORDS, AND TO ELECTRONIC DELIVERY OF NOTICES, POLICIES, AND
            RECORDS OF TRANSACTIONS INITIATED OR COMPLETED BY US OR VIA THE
            SITE. You hereby waive any rights or requirements under any
            statutes, regulations, rules, ordinances, or other laws in any
            jurisdiction which require an original signature or delivery or
            retention of non-electronic records, or to payments or the granting
            of credits by any means other than electronic means.
          </p>
          <div className="back-to-top-container">
            <button className="back-to-top-link" onClick={scrollToTop}>
              Back to Top
            </button>
          </div>
        </li>

        {/* California Users and Residents */}
        <li className="terms-section" id="S24">
          <h2 className="terms-heading">California Users and Residents</h2>
          <p className="terms-text">
            If any complaint with us is not satisfactorily resolved, you can
            contact the Complaint Assistance Unit of the Division of Consumer
            Services of the California Department of Consumer Affairs in writing
            at 1625 North Market Blvd., Suite N 112, Sacramento, California
            95834 or by telephone at (800) 952-5210 or (916) 445-1254.
          </p>
          <div className="back-to-top-container">
            <button className="back-to-top-link" onClick={scrollToTop}>
              Back to Top
            </button>
          </div>
        </li>

        {/* Miscellaneous */}
        <li className="terms-section" id="S25">
          <h2 className="terms-heading">Miscellaneous</h2>
          <p className="terms-text">
            These Terms of Use and any policies or operating rules posted by us
            on the Site or in respect to the Site constitute the entire
            agreement and understanding between you and us. Our failure to
            exercise or enforce any right or provision of these Terms of Use
            shall not operate as a waiver of such right or provision. These
            Terms of Use operate to the fullest extent permissible by law. We
            may assign any or all of our rights and obligations to others at any
            time. We shall not be responsible or liable for any loss, damage,
            delay, or failure to act caused by any cause beyond our reasonable
            control. If any provision or part of a provision of these Terms of
            Use is determined to be unlawful, void, or unenforceable, that
            provision or part of the provision is deemed severable from these
            Terms of Use and does not affect the validity and enforceability of
            any remaining provisions. There is no joint venture, partnership,
            employment or agency relationship created between you and us as a
            result of these Terms of Use or use of the Site. You agree that
            these Terms of Use will not be construed against us by virtue of
            having drafted them. You hereby waive any and all defenses you may
            have based on the electronic form of these Terms of Use and the lack
            of signing by the parties hereto to execute these Terms of Use.
          </p>
          <div className="back-to-top-container">
            <button className="back-to-top-link" onClick={scrollToTop}>
              Back to Top
            </button>
          </div>
        </li>
      </ol>
    </main>
  );
};

export default TermsOfUse;
