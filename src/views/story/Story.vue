<style lang="scss" scoped>
  @import "@/styles/constants.scss";
  @import "@/styles/generics.scss";
  @import "@/styles/pageAnimations.scss";

  ul{
    margin: 0px;
    padding-left: 60px;
    li:not(:first-child){
      margin-top: 30px;
    }
  }
</style>

<template>
  <div id="atticus" class="product-container">
    <section-nav></section-nav>
    <div class="product-col">
      <div class="main-page">
        <div class="title-module">
          <div class="product-title">
            Our Story
          </div>
        </div>
      </div>
      <div class="product-page">
        <div class="page-section full-page">
          <div class="section-text">
            <div class="section-title small">
              WHO WE ARE
            </div>
            <div class="section-content">
              Juris Futura is a technology subsidiary of US law firm Holland & Hart, created in response to the firm’s first-hand experience of seeing technology drive client value and firm success. 
              <br /><br />
              Through years of direct collaboration with our legal practitioners, our team of technologists and business professionals observed that practitioners share similar challenges:
              <br /><br />
              <ul>
                <li>Maximize efficiency/profits without compromising quality</li>
                <li>Reduce time spent on administrative tasks and learning complex new technology solutions</li>
                <li>Deliver high-quality legal services faster and cheaper</li>
                <!-- •	Compete to deliver legal services faster, cheaper, and better -->
              </ul>
              <br />
              Our solutions seek to address these challenges, and we are now excited to make them available to the wider legal industry.
            </div>
          </div>
        </div>
        <div class="page-section full-page">
          <div class="section-text">
            <div class="section-title small">
              OUR PHILOSOPHY
            </div>
            <div class="section-content">
              At Juris Futura we’re unabashed legal technology futurists. From AI to natural language processing to machine learning, we see tremendous opportunities to transform legal services through technology.
              <br /><br />
              But that doesn’t mean that legal practitioners need to become technologists, or that their work needs to be drastically disrupted. Instead, we believe the future of law is one where practitioners are free to focus on their substantive legal work with reduced friction or distraction.
              <br /><br />
              Will robots take over the legal world? Maybe one day, but for now we’re focusing on finding solutions to the tangible, everyday problems that will positively impact legal practitioners’ lives and law firms’ bottom lines.
            </div>
          </div>
        </div>
        <div class="page-section full-page">
          <div class="section-text">
            <div class="section-title small">
              SURPISINGLY SIMPLE SOLUTIONS
            </div>
            <div class="section-content">
              Our solutions insert new capabilities into practitioners’ existing workflows, learn users’ behavior and preferences, and automate tasks that do not need to be completed by a legal professional.
              <br /><br />
              We help practitioners create a competitive edge by enabling them to focus time and effort where it provides the most value to their clients and to their firms, and through driving efficiencies, cost-savings, and increased productivity.
            </div>
          </div>
        </div>
      </div>
    </div>
    <contact-footer></contact-footer>
  </div>
</template>

<script>
  import contactFooter from "@/components/footer.vue";
  import SectionNav from "@/components/SectionNav.vue";

  import sectionController from '@/mixins/sectionController.js';
  import pageController from '@/mixins/pageController.js';

  export default {
    components: { contactFooter, SectionNav },
    // mixins: [ sectionController, pageController ],
  }
</script>
