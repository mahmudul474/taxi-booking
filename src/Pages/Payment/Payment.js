import React, { useContext } from "react";
import DataContext from "../../Datacontext/Datas";
import { Link } from "react-router-dom";

const Payment = () => {
  const { data, setData, category, setCategory, userInfo, setUserInfo } = useContext(DataContext);

  console.log(category);

  return (
    <>
      

            <div class="rounded-md">
                <form id="payment-form" method="POST" action="">
                    <section>
                        <h2 class="uppercase tracking-wide text-lg font-semibold text-gray-700 my-8">Shipping & Billing Information</h2>
                        <fieldset class="mb-3 bg-white shadow-lg rounded text-gray-600">
                            <label class="flex border-b border-gray-200 h-12 py-3 items-center">
                                <span class="text-right px-2">Name</span>
                                <input name="name" class="focus:outline-none px-3" placeholder="Try Odinsson" required=""/>
                            </label>
                            <label class="flex border-b border-gray-200 h-12 py-3 items-center">
                                <span class="text-right px-2">Email</span>
                                <input name="email" type="email" class="focus:outline-none px-3" placeholder="try@example.com" required=""/>
                            </label>
                            <label class="flex border-b border-gray-200 h-12 py-3 items-center">
                                <span class="text-right px-2">Address</span>
                                <input name="address" class="focus:outline-none px-3" placeholder="10 Street XYZ 654"/>
                            </label>
                            <label class="flex border-b border-gray-200 h-12 py-3 items-center">
                                <span class="text-right px-2">City</span>
                                <input name="city" class="focus:outline-none px-3" placeholder="San Francisco"/>
                            </label>
                            <label class="inline-flex w-2/4 border-gray-200 py-3">
                                <span class="text-right px-2">State</span>
                                <input name="state" class="focus:outline-none px-3" placeholder="CA"/>
                            </label>
                            <label class="xl:w-1/4 xl:inline-flex py-3 items-center flex xl:border-none border-t border-gray-200 py-3">
                                <span class="text-right px-2 xl:px-0 xl:text-none">ZIP</span>
                                <input name="postal_code" class="focus:outline-none px-3" placeholder="98603"/>
                            </label>
                            <label class="flex border-t border-gray-200 h-12 py-3 items-center select relative">
                                <span class="text-right px-2">Country</span>
                                <div id="country" class="focus:outline-none px-3 w-full flex items-center">
                                    <select name="country" class="border-none bg-transparent flex-1 cursor-pointer appearance-none focus:outline-none">
                                        <option value="AU">Australia</option>
                                        <option value="BE">Belgium</option>
                                        <option value="BR">Brazil</option>
                                        <option value="CA">Canada</option>
                                        <option value="CN">China</option>
                                        <option value="DK">Denmark</option>
                                        <option value="FI">Finland</option>
                                        <option value="FR">France</option>
                                        <option value="DE">Germany</option>
                                        <option value="HK">Hong Kong</option>
                                        <option value="IE">Ireland</option>
                                        <option value="IT">Italy</option>
                                        <option value="JP">Japan</option>
                                        <option value="LU">Luxembourg</option>
                                        <option value="MX">Mexico</option>
                                    
                                    </select>
                                </div>
                            </label>
                        </fieldset>
                    </section>
                </form>
                
                   <div class="rounded-md">
                <section>
                    <h2 class="uppercase tracking-wide text-lg font-semibold text-gray-700 my-2">Payment Information</h2>
                    <fieldset class="mb-3 bg-white shadow-lg rounded text-gray-600">
                        <label class="flex border-b border-gray-200 h-12 py-3 items-center">
                            <span class="text-right px-2">Card</span>
                            <input name="card" class="focus:outline-none px-3 w-full" placeholder="Card number MM/YY CVC" required=""/>
                        </label>
                    </fieldset>
                </section>
            </div>
              <div className="flex justify-end  "> 
              <Link to="/thanks">
          <button className="btn bg-green-950 "> Book Now</button></Link>
           </div>
             </div>
         
             
      

 
    </>
  );
};

export default Payment;
