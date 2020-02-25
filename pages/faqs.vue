<template>
  <div>
    <h1> FAQs </h1>
    <h3> General FAQs </h3>
    <!-- what is crowdfunding answer -->
    <div class="faq-div" v-b-toggle.collapse-1>
        <img src="/expand.png" alt="see answer" width="15px"/>
        <p> What is Crowdfunding? </p>
    </div>
    <br/>
    <b-collapse id="collapse-1">
        <b-card> Crowdfunding is the practice of sourcing small contributions from a large number of people to provide funding for a particular project or campaign, usually via the Internet. </b-card>
    </b-collapse>
    <!-- what is cu crowdfuning -->
    <div class="faq-div" v-b-toggle.collapse-2 >
        <img src="/expand.png" alt="see answer" width="15px"/>
        <p> What is CU Boulder Crowdfunding? </p>
    </div>
    <br/>
    <b-collapse id="collapse-2">
        <b-card> CU Boulder Crowdfunding is an online fundraising tool created by the University of Colorado Boulder that allows individuals and organizations to create and share fundraising campaigns with an engaged community. The CU Boulder Crowdfunding platform can empower the entire CU community to come together and create lasting impact on projects they may be interested in or care about.  </b-card>
    </b-collapse>
    <!-- how does it work answer -->
    <div class="faq-div" v-b-toggle.collapse-3 >
        <img src="/expand.png" alt="see answer" width="15px"/>
        <p> How does CU Boulder Crowdfunding Work? </p>
    </div>
    <br/>
    <b-collapse id="collapse-3">
        <b-card>
            <p> 
            CU Boulder students, faculty or staff may apply to begin a crowdfunding campaign for a particular project with a defined fundraising 
            goal and set timeline. Applicants (the "campaign creator") work with the crowdfunding coordinator for their project to be approved 
            and then go through the process of creating a campaign page. The campaign launches and lasts for a limited period of time, agreed 
            upon by the campaign creator and crowdfunding coordinator prior to the launch of the campaign. Campaign creators work to share the 
            crowdfunding page and donors to campaigns are encouraged to share the campaign with their network, too! 
            </p>

            <p> Upon the campaign's completion, campaign creators work with the appropriate University staff to access the fundraised money for 
                their particular project. </p>
        </b-card>
    </b-collapse>
    <div class="faq-div" v-b-toggle.collapse-4 > 
        <img src="/expand.png" alt="see answer" width="15px"/>
        <p> Who can Contribute to CU Boudler Crowdfunding? </p>
    </div>
    <br/>
    <!-- who can contrib answer -->
    <b-collapse id="collapse-4">
        <b-card>Anyone! Contributions to projects can be made by any individual or organization inside or outside of the CU Boulder community</b-card>
    </b-collapse>

    <!-- PROJECT TEAM AND CREATORS -->
    <h3> Project Team and Campaign Creator FAQs </h3>
    <div class="faq-div" v-b-toggle.collapse-5 > 
        <img src="/expand.png" alt="see answer" width="15px"/>
        <p> Who can start a Project on CU Boulder Crowdfunding? </p>
    </div>
    <br/>
    <!-- start a project answer -->
    <b-collapse id="collapse-5">
        <b-card> All CU Boulder students, faculty, and staff can apply to create and launch a campaign on the CU Boulder Crowdfunding platform. For more information, visit the "Apply" tab in the main menu. The application can also be found here.  </b-card>
    </b-collapse>
    <div class="faq-div" v-b-toggle.collapse-6>
        <img src="/expand.png" alt="see answer" width="15px"/>
        <p> How do campaign creators access funds raised? </p>
    </div>
    <br/>
    <!-- access funds answer -->
    <b-collapse id="collapse-6">
        <b-card>The campaign creator works with the group's appropriate budget coordinator/finance manager to access all fundraised money. The money fundraised during a campaign will go into a specific gift fund account with a code attached, identifying the donations as part of the particular project/campaign. </b-card>
    </b-collapse>
    <div class="faq-div" v-b-toggle.collapse-7>
        <img src="/expand.png" alt="see answer" width="15px"/>
        <p> Is my campaign appropriate for the CU Boulder Crowdfunding Program? </p>
    </div>
    <br/>
    <!-- is my campaign ok answer -->
    <b-collapse id="collapse-7">
        <b-card> Campaigns need to be created/organized by current CU Boulder student(s), faculty or staff.
Each campaign must have a specific goal/project, an itemized budget with a corresponding fundraising goal, a plan for outreach (social media & email/personal contact) and be directly related to the University's mission.
Additionally, it is important to take into account what a reasonable fundraising goal is -- think about the scope of your project and the list of people you will reach out to for donations -- if you need to fundraise several thousand dollars, think about ways you may set goals/strategies for different items in your itemized budget. </b-card>
    </b-collapse>
    <div class="faq-div" v-b-toggle.collapse-8 >
        <img src="/expand.png" alt="see answer" width="15px"/>
        <p> How long do campaigns typically last? </p>
    </div>
    <br/>
    <!-- campaign length answer -->
    <b-collapse id="collapse-8">
        <b-card> Campaigns typically last between 30 - 45 days. </b-card>
    </b-collapse>
    <div class="faq-div" v-b-toggle.collapse-9 >
        <img src="/expand.png" alt="see answer" width="15px"/>
        <p> How long does it take to set up a campaign? </p>
    </div>
    <br/>
    <!-- Element to collapse -->
    <b-collapse id="collapse-9">
        <b-card> Please allow at least one month for your campaign to be set up, from the time of submitting an application/making contact with the crowdfunding coordinator, to the time of the campaign launch. </b-card>
    </b-collapse>

    <!-- CONTRIB / DONOR -->
    <h3> CU Boulder Crowdfunding Contributor/Donor FAQs </h3>
    <div class="faq-div" v-b-toggle.collapse-10> 
        <img src="/expand.png" alt="see answer" width="15px"/>
        <p> How do I contribute a project on the CU Boulder Crowdfunding site? </p>
    </div>
    <br/>
    <!-- how do I contribute to a site -->
    <b-collapse id="collapse-10">
        <b-card> Find the project page for the project that you would like to contribute to and click "support this project." You will be 
            asked for a contribution amount and credit card information. You can also contribute by telling your friends and family 
            about a project that you are interested in, or by spreading the word across your social networks. </b-card>
    </b-collapse>
    <div class="faq-div" v-b-toggle.collapse-11 > 
        <img src="/expand.png" alt="see answer" width="15px"/>
        <p> What methods of payment does CU Boudler Crowdfunding accept? </p>
    </div>
    <br/>
    <!-- accept payment answer -->
    <b-collapse id="collapse-11">
        <b-card> CU Boulder Crowdfunding accepts credit card payments (Visa, MasterCard, American Express, and Discover). To donate via mailed check, 
            please locate detailed instructions at the bottom of the campaign page of the project you wish to help fund. </b-card>
    </b-collapse>
    <div class="faq-div" v-b-toggle.collapse-12 > 
        <img src="/expand.png" alt="see answer" width="15px"/>
        <p> Is there a minimum or maximum amount I can contribute? </p>
    </div>
    <br/>
    <!-- min/max contrib amount answer -->
    <b-collapse id="collapse-12">
        <b-card> Yes, there is a $1 minimum contribution amount required. There is no maximum amount and you can also make multiple contributions
        to multiple projects. </b-card>
    </b-collapse>
    <div class="faq-div" v-b-toggle.collapse-13 > 
        <img src="/expand.png" alt="see answer" width="15px"/>
        <p> If I contribute to a project, when is my credit card charged?  </p>
    </div>
    <br/>
    <!-- credit card charged -->
    <b-collapse id="collapse-13">
        <b-card> Immediately upon making the donation. </b-card>
    </b-collapse>
    <div class="faq-div" v-b-toggle.collapse-14> 
        <img src="/expand.png" alt="see answer" width="15px"/>
        <p> Is my contribution tax deductible? </p>
    </div>
    <br/>
    <!-- tax deductible answer -->
    <b-collapse id="collapse-14">
        <b-card> Yes, your contribution is a donation gift made to the CU Foundation and is tax deductible as allowed by law. You will receive a 
            tax-deductible receipt for the entire amount of your donation. Funds contributed are then transferred from the CU Foundation 
            to the University for use by the specified project.</b-card>
    </b-collapse>
    <div class="faq-div" v-b-toggle.collapse-15> 
        <img src="/expand.png" alt="see answer" width="15px"/>
        <p> Does CU Boulder Crowdfunding store my credit card payment? </p>
    </div>
    <br/>
    <!-- credit card saved answer -->
    <b-collapse id="collapse-15">
        <b-card> No, CU Boulder Crowdfunding does not store any payment or credit card information. </b-card>
    </b-collapse>
    <div class="faq-div" v-b-toggle.collapse-16> 
        <img src="/expand.png" alt="see answer" width="15px"/>
        <p> Is my contribution amount publically displayed? </p>
    </div>
    <br/>
    <!-- contrib amount publically displayed answer -->
    <b-collapse id="collapse-16">
        <b-card> Unless you choose to give anonymously, your name will be displayed as part of the campaign's community of supporters.  
            However, your contribution amount will not be publically displayed.</b-card>
    </b-collapse>
    <div class="faq-div" v-b-toggle.collapse-17> 
        <img src="/expand.png" alt="see answer" width="15px"/>
        <p> Can I request to make an anonymous contribution? </p>
    </div>
    <br/>
    <!-- anon donation answer -->
    <b-collapse id="collapse-17">
        <b-card> Unless you choose to give anonymously, your name will be displayed as part of the campaign's community of supporters.  
            However, your contribution amount will not be publically displayed.</b-card>
    </b-collapse>
    <!-- when will a project receive funds -->
    <div class="faq-div" v-b-toggle.collapse-18> 
        <img src="/expand.png" alt="see answer" width="15px"/>
        <p> When will a project receive funds? </p>
    </div>
    <br/>
    <b-collapse id="collapse-18">
        <b-card> Projects will receive their funds once their campaign has ended (typical 30-45 days from the launch date of the campaign). </b-card>
    </b-collapse>
    <!-- contrib projects social media sharing -->
    <div class="faq-div" v-b-toggle.collapse-19> 
        <img src="/expand.png" alt="see answer" width="15px"/>
        <p> Can I share that I contributed to a project through social media accounts? </p>
    </div>
    <br/>
    <b-collapse id="collapse-19">
        <b-card> Yes, please do!  You can share the campaign directly using the "Share This Campaign" feature at the top of the campaign page. </b-card>
    </b-collapse>
    <!-- rewards -->
    <div class="faq-div" v-b-toggle.collapse-20> 
        <img src="/expand.png" alt="see answer" width="15px"/>
        <p> What rewards, if any, cn I receive for my contribution? </p>
    </div>
    <br/>
    <b-collapse id="collapse-20">
        <b-card> Currently, CU Boulder Crowdfunding is only allowing for non-tangible rewards to be given and only from certain 
            selected projects. These non-tangible rewards are defined as rewards that don't have any monetary value except for 
            the costs of the materials such as cards, blank CDs, poster boards, paper, etc.
            Rewards offered vary for each project.</b-card>
    </b-collapse>
    <!-- can I get a refund -->
    <div class="faq-div" v-b-toggle.collapse-21> 
        <img src="/expand.png" alt="see answer" width="15px"/>
        <p> Can I get a refund for a contribution I have made? </p>
    </div>
    <br/>
    <b-collapse id="collapse-21">
        <b-card>Yes, a refund request will need to be made directly to the Processing Department in the Office of Advancement (
            not the Foundation) at (303) 541-1290 or via email at advancement.processing@cu.edu. </b-card>
    </b-collapse>
    <!-- percentage of money going towards project -->
    <div class="faq-div" v-b-toggle.collapse-22> 
        <img src="/expand.png" alt="see answer" width="15px"/>
        <p> How do I know what percentage of the money goes to the project? </p>
    </div>
    <br/>
    <b-collapse id="collapse-22">
        <b-card> 100% of the funds raised will be used by the project to which you have contributed for 
            the project tasks and related expenses.  Each project has a detailed budget breakdown and a section on 
            “use of funds” in their project description pages on the CU Boulder Crowdfunding website.</b-card>
    </b-collapse>
    <!-- how do people know funds are going a project -->
    <div class="faq-div" v-b-toggle.collapse-23> 
        <img src="/expand.png" alt="see answer" width="15px"/>
        <p> How do contributors know that their contributions will be used for the project that they gave to? </p>
    </div>
    <br/>
    <b-collapse id="collapse-23">
        <b-card> 100% of your contribution will go only to the project (or projects) you have designated. Each project has a
            separate account organized by University accounting which will be monitored by an assigned University staff and/or faculty sponsor 
            for each project. </b-card>
    </b-collapse>
    <!-- project reaches funding goal -->
    <div class="faq-div" v-b-toggle.collapse-24> 
        <img src="/expand.png" alt="see answer" width="15px"/>
        <p> How will I know if and when the project reaches its funding goal? </p>
    </div>
    <br/>
    <b-collapse id="collapse-24">
        <b-card> You can always check back on the project page to look at the funding progress. You can also sign up for updates or 
            follow the project's social media pages for updates. You will receive an e-mail when the project fundraising time has 
            expired regardless of the success of the project.</b-card>
    </b-collapse>
    <!-- project funds answer -->
    <div class="faq-div" v-b-toggle.collapse-25> 
        <img src="/expand.png" alt="see answer" width="15px"/>
        <p> What happens if a project excees its specified funding goal? </p>
    </div>
    <br/>
    <b-collapse id="collapse-25">
        <b-card> Each of the project teams has identified a set of baseline project tasks and goals in addition to a set of “stretch goals”. 
            Should a project be fortunate enough to exceed its funding goal, the additional funds will be utilized to help the team 
            reach the project stretch goals as identified in their project description pages on the CU Boulder Crowdfunding website.  
            Designation of unspent funds is listed on each campaign page as well.</b-card>
    </b-collapse>
    <!-- Are contributions returned -->
    <div class="faq-div" v-b-toggle.collapse-26> 
        <img src="/expand.png" alt="see answer" width="15px"/>
        <p> Are contributions returned if a project does not reach its stated funding goal? </p>
    </div>
    <br/>
    <b-collapse id="collapse-26">
        <b-card> No, we believe that projects should be able to keep the funds that are raised even if the total funding goal may not 
            have been reached. We expect each of the project teams will make some progress in achieving their project goals even if
            they may not have been fully funded.</b-card>
    </b-collapse>
    <!-- can i ask questions -->
    <div class="faq-div" v-b-toggle.collapse-27> 
        <img src="/expand.png" alt="see answer" width="15px"/>
        <p> Can I ask questions about projects? </p>
    </div>
    <br/>
    <b-collapse id="collapse-27">
        <b-card> Absolutely! You can submit questions and feedback through the CU Boulder Crowdfunding website using the "Contact" or "Feedback" forms.  </b-card>
    </b-collapse>
    <!-- email alerts answer -->
    <div class="faq-div" v-b-toggle.collapse-28> 
        <img src="/expand.png" alt="see answer" width="15px"/>
        <p> Can I sign up for email alerts to receive project updates? </p>
    </div>
    <br/>
    <b-collapse id="collapse-28">
        <b-card> Supporters who have contributed to a project will receive e-mails whenever 
            the project creator creates an update and when the project funding period ends. </b-card>
    </b-collapse>
  </div>
</template>

<script>

export default {
    name: 'faqs'
}
</script>

<style scoped>
    h1{
        margin-bottom: 1em;
    }
    h3{
        margin-bottom: 1em;
    }
    .faq-div{
        border-bottom: 1px solid black;
        padding-bottom: 1em;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        padding-bottom: .5em;
    }
    p{
        margin: 0px;
        margin-left: 1em;
    }
    .faq-div:hover{
        cursor: pointer;
    }

    .collapse.show{
        margin-bottom: .5em;
    }

</style>
