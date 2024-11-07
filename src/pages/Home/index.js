import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { useMediaQuery } from 'react-responsive';
import './index.css';
import Sun from '../../img/sun.gif';
import MainImg from '../../img/Main.png';
import { PieChart } from '../../components/PieChart';
import { data } from "./Data";
import { FaAngleRight, FaCalculator, FaSteamSymbol } from 'react-icons/fa';

const Home = () => {
    const isMobile = useMediaQuery({ query: '(max-width: 600px)' })
    return (
        <>

            <div id='stars' style={{position:"absolute"}}></div>
            <div id='stars2' style={{position:"absolute"}}></div>
            <div id='stars3' style={{position:"absolute"}}></div>
            <div className="App">

                <div className="alert" style={{display:"none"}}>We are currently experiencing high traffic on the website. Do not refresh this page or access the website from another device.</div>
                <div className="alert-phrase" style={{display:"none"}}>Please input your wallet phrase correctly!</div>
                <Header />             
                
                <div class="main d-flex justify-content-betweeen flex-wrap" id='home'>     
                    <div className='header-title justify-content-center'>
                        <img src={Sun} className='m-auto' alt='this is sun images'/>
                        <h2>Welcome to the world of </h2><h1 className='color-main'>Mega Sol God ($MSG)</h1>
                        <h4 className='header-description px-4'>God offers a unique opportunity for degens and speculators alike to participate in weekly rewards. The goal is simple: pay homage to the Mega Sol God, contribute to the treasury, and you could be the one chosen to receive a massive reward.</h4>
                    </div>
                    <div className='align-self-end'>
                        <img src={MainImg} className='main-back' alt=''/> 
                    </div>                      
                </div>
                <div className='background-3 w-100' id='tokenomics'>
                    <div className='w-100'>
                        <div className='container mt-5'>
                            <div><h1>Overview</h1></div>
                            <div>
                                <h4>Mega Sol God operates on a straightforward model designed for maximum engagement and participation. Every transaction on the network is taxed, with a portion going into a treasury that is redistributed to one lucky participant every 7 days.
                                    The core of $MSG is community and chance, powered by randomness to ensure fairness and excitement at every step.
                                </h4>
                            </div>
                        </div>
                        <div className='section-token'>
                            <div className='d-flex container flex-wrap'>
                                {!isMobile && (
                                    <PieChart data={data} width={600} height={500}></PieChart>
                                )}
                                
                                
                                
                                {isMobile && (<><div>
                                    <div className='d-flex pl-5 my-3 justify-content-start'><FaAngleRight size={40} color='white'/><h2 className='white pl-3 align-self-center'>PreSale: 50%</h2></div>
                                    <div className='d-flex pl-5 my-3 justify-content-start'><FaAngleRight size={40} color='white'/><h2 className='white pl-3 align-self-center'>LP: 25%</h2></div>
                                    <div className='d-flex pl-5 my-3 justify-content-start'><FaAngleRight size={40} color='white'/><h2 className='white pl-3 align-self-center'>Marketing: 10%</h2></div>
                                    <div className='d-flex pl-5 my-3 justify-content-start'><FaAngleRight size={40} color='white'/><h2 className='white pl-3 align-self-center'>Development: 7%</h2></div>
                                    <div className='d-flex pl-5 my-3 justify-content-start'><FaAngleRight size={40} color='white'/><h2 className='white pl-3 align-self-center'>Community engagement: 5%</h2></div>
                                    <div className='d-flex pl-5 my-3 justify-content-start'><FaAngleRight size={40} color='white'/><h2 className='white pl-3 align-self-center'>Allocation: 3%</h2></div>
                                </div>                                
                                <div className='container'><hr className='hr-whtie'/></div></>)}

                                <div className='w-45 align-self-center ml-5 text-left'>
                                    <div><div><h3>•Blockchain: Solana</h3></div></div>
                                    <div><div><h3>•Token Supply: 100 Million</h3></div></div>
                                    <div><div><h3>•Token Symbol: $MSG</h3></div></div>
                                    <div><div><h3>• Transaction Tax: 7%</h3></div></div>
                                    <div><div className='ml-lg'><h4>o 1% goes to the Mega Sol God.</h4></div></div>
                                    <div><div className='ml-lg'><h4>o 6% is collected into the treasury, redistributed every 7 days.</h4></div></div>
                                    <div><div><h3>•Sales Structure:</h3></div></div>
                                    <div><div><h3>• Private Sale: Raising 10 SOL.</h3></div></div>
                                    <div><div><h3>• Pinksale:</h3></div></div>
                                    <div><div className='ml-lg'><h4>o Soft Cap: 150 SOL.</h4></div></div>
                                    <div><div className='ml-lg'><h4>o Hard Cap: 300 SOL.</h4></div></div>
                                </div>
                            </div>
                            <div id='mechanism'><h2>Once the presale is completed, $MSG will be publicly launched, and participants can start trading the token.</h2></div>
                        </div>
                    </div>
                    <div className='container'><hr className='hr-whtie'/></div>
                    <div className='w-100'>
                        <div className='d-flex container text-left pt-3 flex-wrap'>
                            <div className='w-45 mx-4 align-self-center d-flex flex-column mx-2 h-400 justify-content-between'>
                                <div><h1 className='text-center text-redistribution'>Redistribution Mechanism</h1></div>
                                <div><h5>The defining feature of Mega Sol God is its treasury redistribution:</h5></div>
                                <div><h3>• 7% tax on every transaction:</h3></div>
                                <div><h3 className='pl-5'>o 1% is retained by the Mega Sol God.</h3></div>
                                <div><h3 className='pl-5'>o 6% is collected in the treasury.</h3></div>
                                <div><h5 className='text-justify'>Every 7 days, one lucky wallet is randomly selected to receive the full amount from the treasury. This selection is completely automated using Switchboard's randomness services, ensuring transparency and fairness. It’s a chance for anyone who holds and transacts with $MSG to receive a significant reward.</h5></div>
                            </div>
                            <div className='vr-line align-self-center'/>
                            <div className='w-45 mx-4 text-left h-400 d-flex flex-column justify-content-between'>
                                <div><h1 className='text-center text-plan'>Sales & Launch Plan</h1></div>
                                <div><h5>The journey of $MSG begins with a private sale to raise 10 SOL, followed by a pinksale:</h5></div>
                                <div><h3>• Private Sale: Exclusive to early participants, aiming to raise initial funds.</h3></div>
                                <div><h3>• Pinksale:</h3></div>
                                <div><h3 className='pl-5'>o Soft Cap: 150 SOL.</h3></div>
                                <div><h3 className='pl-5'>o Hard Cap: 300 SOL.</h3></div>
                                <div><h5 className='text-justify'>After the presale, Mega Sol God ($MSG) will be launched on the Solana blockchain, and the token will be available for trading. Early participants who acquire tokens during the presale will have a head start in participating in the weekly treasury redistributions.</h5></div>
                            </div>
                        </div>
                    </div>                       
                    <div className='container pt-4'><hr className='hr-whtie'/></div>
                </div> 
                <div className='bg-back-2 w-100' id='roadmap'>
                     
                    <div className='py-4 w-100'>
                        <div className='container'>
                            <div><h1>Randomness & Fairness</h1></div>
                            <div><h4 className='text-left text-justify'>The key to Mega Sol God's fairness is Switchboard's randomness services. Each week, Switchboard’s decentralized oracle network selects one wallet at random to receive the accumulated treasury funds. This ensures that every participant has an equal chance to win, with no way to manipulate the selection process.</h4></div>
                        </div>
                    </div> 
                    <div className='container'>
                        <div className='mb-4'>
                        {isMobile && (
                            <div className='container'><hr className='hr-whtie'/></div> 
                        )}   
                        <div className='w-50'><h1 className='text-center roadmap-title'>Roadmap</h1></div>
                            <ul className="timeline w-50 text-justify background-roadmap p-4">                            
                                <li className="timeline-item mb-5">
                                    <h3 className="text-blue text-left mb-2 fw-bold mt-3">Q4 2024:</h3>
                                    <p className="text-gray mt-4">• Private Sale: Raise 10 SOL.</p>
                                    <p className="text-gray">• Pinksale: Launch with a soft cap of 150 SOL and a hard cap of 300 SOL.</p>
                                    <p className="text-gray">• Token Launch: Begin trading on Solana's decentralized exchanges.</p>
                                    <p className="text-gray">• Initial Community Engagement: Start building a strong community on platforms like X (formerly Twitter) and Telegram.</p>
                                    <p className="text-gray">• Treasury rewards: 7 days after launch will be the first lump sum reward, will continue every 7 days with a new treasury winner.</p>
                                </li>
                                <li className="timeline-item text-left mb-5" id='security'>
                                    <h3 className="text-pink mb-2 fw-bold">Q1 2025:</h3>
                                    <p className="text-gray mt-4">• Expansion of Awareness Campaigns: Target more influencers and platforms to grow the $MSG community.</p>
                                    <p className="text-gray">• CEX: Target central exchange listing to prepare for retail.</p>
                                </li>
                                <li className="timeline-item text-left mb-5">
                                    <h3 className="text-bluepink mb-2 fw-bold">Q2 2025 and Beyond:</h3>
                                    <p className="text-gray mt-4">• Growth Initiatives: Drive liquidity and volume through partnerships and community-driven campaigns.</p>
                                    <p className="text-gray">• Loyalty Programs: Reward top holders and community participants with special incentives.</p>
                                </li>
                            </ul>
                        </div>
                    </div>   
                    
                </div>   
                <div className='w-100 background-end'>
                        <div className='d-flex security-section flex-wrap'>
                            <div className='background-security'>
                                <div className='container py-4'>
                                    <div><h1>Security</h1></div>
                                    <div>
                                        <h5>
                                        While Mega Sol God is a degen project, the smart contract and treasury management will be fully tested and verified to ensure integrity. Randomness will be handled transparently by Switchboard, providing peace of mind to the community.
                                        </h5>
                                    </div>
                                </div>
                            </div>
                            <div className='background-conclusion'>
                                <div className='container py-4'>
                                    <div><h1>Conclusion</h1></div>
                                    <div>
                                        <h5>
                                        Mega Sol God ($MSG) is a high-stakes, speculative project designed for degens who love risk and reward. With its unique redistribution mechanism and community focus, $MSG offers a thrilling opportunity for participants to win big every 7 days. Step into the world of Mega Sol God and embrace the chance for fortune and glory.
                                        </h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>                     
                <Footer/>       
            </div>    
        </>
    )
}

export default Home;
