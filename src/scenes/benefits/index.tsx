import HText from "@/shared/HText";
import { BenefitType, SelectedPage } from "@/shared/types";
import { HomeModernIcon, UserGroupIcon, AcademicCapIcon} from "@heroicons/react/16/solid";
import { motion } from "framer-motion";
import BenefitsPageGraphic from "@/assets/BenefitsPageGraphic.png"
import Benefit from "./Benefit";
import ActionButton from "@/shared/ActionButton";


const benefits: Array<BenefitType> = [
  {
    icon: <HomeModernIcon className="h-6 w-6" />,
    title: "State of the Art Facilities",
    description:
           "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis aliquam incidunt doloribus atque tempore cumque magni."
  },
  {
    icon: <UserGroupIcon className="h-6 w-6" />,
    title: "100's of Diverse Classes",
    description:
           "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis aliquam incidunt doloribus atque tempore cumque magni."
  },
  {
    icon: <AcademicCapIcon className="h-6 w-6" />,
    title: "Expert and Pro Trainers",
    description:
           "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis aliquam incidunt doloribus atque tempore cumque magni."
  },
]

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2}
  }
}

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}

const Benefits = ({setSelectedPage}: Props) => {
  return <section
  id="benefits"
  className="mx-auto min-h-full w-5/6 py-20">
    <motion.div
    onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}
    >

      {/* Header */}
      <motion.div 
      className="md:my-5 md:w-3/5"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5}}
      transition={{ delay: 0.5}}
      variants={{
       hidden: {opacity: 0, x: -50},
       visible: {opacity: 1, x: 0},
      }}
      >
        <HText>MORE THAN JUST A GYM.</HText>
        <p className="my-5 text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione esse aliquid blanditiis placeat asperiores tenetur quos modi dolorem numquam optio dicta ducimus debitis, quae ex nihil quibusdam et. Placeat, ipsum?
        </p>
      </motion.div>

      {/* Benefits */}
      <motion.div className="mt-5 md:flex items-center justify-between gap-8 "
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5}}
      variants={container}>
        {benefits.map((benefit: BenefitType) => (
          <Benefit
          key={benefit.title}
          icon={benefit.icon}
          title={benefit.title}
          description={benefit.description}
          setSelectedPage={setSelectedPage}
           />
           ))}
      </motion.div>

    {/* Graphics and Description */}
    <div className="mt-16 items-center justify-between gap-20">
      {/* Graphic */}
      <img 
        className="mx-auto"
        alt="benefits-page-graphic"
        src={BenefitsPageGraphic}
      />

      {/* Description */}
      <div>
        {/* Title */}
        <div className="relative">
          <div className="before:absolute before:-top-20 before:-left-20 before:z-[1] before:content-abstractwaves">
            <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5}}
                  transition={{ delay: 0.5}}
                  variants={{
                   hidden: {opacity: 0, x: 50},
                   visible: {opacity: 1, x: 0},
                  }}
            >
              <HText>
                MILLIONS OF HAPPY MEMBERS GETTING{""}
                <span className="text-primary-500">FIT</span>
              </HText>
            </motion.div>
          </div>
        </div>

        {/* Description */}
      <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5}}
      transition={{ delay: 0.2, duration: 0.5}}
      variants={{
       hidden: {opacity: 0, x: 50},
       visible: {opacity: 1, x: 0},
      }}
      >
        <p className="my-5">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias hic repellendus doloribus velit aperiam, blanditiis praesentium, dolore, sapiente necessitatibus suscipit nesciunt vero obcaecati! Quam at porro inventore, veniam, minima alias impedit saepe reiciendis dolores, molestiae dicta minus vero expedita ut nihil hic.</p>
        <p className="mb-5">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab veritatis esse officiis totam incidunt vitae ducimus, officia, natus adipisci nisi corrupti quaerat iure minima asperiores! Minima, sapiente maiores enim provident iste quisquam qui itaque cupiditate.</p>
      </motion.div>

        {/* Button */}
        <div className="relative mt-16">
          <div className="before:absolute before:-bottom-20 before:right-40 before:z-[1] before:content-sparkles">
            <ActionButton setSelectedPage={setSelectedPage}>
              Join Now
            </ActionButton>
          </div>

      </div>

    </div>
</div>
    </motion.div>
  </section>
}

export default Benefits;