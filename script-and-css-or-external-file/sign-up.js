const signUpSection = document.querySelector("#sign-up-form-sec");

signUpSection.innerHTML = `
<div class="grid place-items-center p-8"><div class="text-center"><h1 class="text-3xl font-serif font-bold">Welcome To Jhalokati Express</h1><p class="px-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihilfugit voluptatem sint fuga maiores dignissimos inventore expeditaeos numquam deserunt eligendi unde culpa, accusamus saepe rerummolestias exercitationem sunt aliquid.</p></div></div>
        <div class="p-5 grid place-items-center">
          <div
            id="form-div"
            class="w-full bg-[#ffffff73] backdrop-blur-[20px] py-10 rounded-[1rem] grid place-items-center gap-10"
          >
            <div class="w-[90%] mx-auto">
              <p class="pb-2">Full Name</p>
              <input
                type="text"
                class="w-full px-3 py-2 outline-none"
                id="login-input-fullName"
                placeholder="Inter Your Full Name"
              />
            </div>
            <div class="w-[90%] mx-auto">
              <p class="pb-2">E-Mail Address</p>
              <input
                type="text"
                class="w-full px-3 py-2 outline-none"
                id="login-input-fullName"
                placeholder="Inter Your E-Mail Address"
              />
            </div>
            <div class="w-[90%] mx-auto">
              <p class="pb-2">Phone Number</p>
              <input
                type="text"
                class="w-full px-3 py-2 outline-none"
                id="login-input-fullName"
                placeholder="Inter Your Phone Number"
              />
            </div>
            <div class="w-[90%] mx-auto">
              <p class="pb-2">Choos A Nearest Location</p>
              <input
                type="text"
                class="w-full px-3 py-2 outline-none"
                id="login-input-fullName"
                placeholder="Inter Your Most Nearest Location"
              />
            </div>
            <div id="submit-div" class="w-[90%] grid grid-cols-2 gap-3 mx-auto">
              <div
                id="login-submit-div-btn"
                class=" py-2 grid place-items-center rounded-[0.5rem] bg-orange-400 cursor-pointer"
              >
                Log In
              </div>
              <div
                id="create-new-acount-btn"
                class=" py-2 grid place-items-center rounded-[0.5rem] bg-orange-400 cursor-pointer"
              >
                Create New Account
              </div>
            </div>
          </div>
        </div>
`;
