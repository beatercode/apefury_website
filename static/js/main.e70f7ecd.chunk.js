(this.webpackJsonpOneX900 = this.webpackJsonpOneX900 || []).push([
    [0], {
        387: function (e, t, n) { },
        388: function (e, t, n) { },
        404: function (e, t) { },
        407: function (e, t) { },
        409: function (e, t) { },
        413: function (e, t) { },
        414: function (e, t) { },
        437: function (e, t) { },
        439: function (e, t) { },
        454: function (e, t) { },
        456: function (e, t) { },
        471: function (e, t) { },
        488: function (e, t) { },
        490: function (e, t) { },
        508: function (e, t) { },
        509: function (e, t) { },
        577: function (e, t) { },
        583: function (e, t) { },
        584: function (e, t) { },
        909: function (e, t, n) {
            console.log(n(21));
            "use strict";
            n.r(t);
            var a = n(7),
                s = n(145),
                c = n.n(s),
                r = (n(387), n(388), n(377)),
                i = n(33),
                o = n(150),
                l = n.n(o),
                u = n(28),
                d = n(69),
                p = n(60),
                m = n(10),
                b = n(21),
                h = n(0),
                j = n.n(h),
                x = n(62),
                f = n.n(x),
                y = n(366),
                v = n.n(y),
                O = n(368),
                k = n.n(O),
                g = n(124),
                w = n.n(g),
                N = [
                    {
                        "inputs": [
                            {
                                "internalType": "address payable",
                                "name": "_commissionWallet",
                                "type": "address"
                            }
                        ],
                        "stateMutability": "nonpayable",
                        "type": "constructor"
                    },
                    {
                        "anonymous": false,
                        "inputs": [
                            {
                                "indexed": true,
                                "internalType": "address",
                                "name": "user",
                                "type": "address"
                            },
                            {
                                "indexed": false,
                                "internalType": "uint256",
                                "name": "totalAmount",
                                "type": "uint256"
                            }
                        ],
                        "name": "FeePayed",
                        "type": "event"
                    },
                    {
                        "anonymous": false,
                        "inputs": [
                            {
                                "indexed": true,
                                "internalType": "address",
                                "name": "user",
                                "type": "address"
                            },
                            {
                                "indexed": false,
                                "internalType": "uint8",
                                "name": "plan",
                                "type": "uint8"
                            },
                            {
                                "indexed": false,
                                "internalType": "uint256",
                                "name": "percent",
                                "type": "uint256"
                            },
                            {
                                "indexed": false,
                                "internalType": "uint256",
                                "name": "amount",
                                "type": "uint256"
                            },
                            {
                                "indexed": false,
                                "internalType": "uint256",
                                "name": "profit",
                                "type": "uint256"
                            },
                            {
                                "indexed": false,
                                "internalType": "uint256",
                                "name": "start",
                                "type": "uint256"
                            },
                            {
                                "indexed": false,
                                "internalType": "uint256",
                                "name": "finish",
                                "type": "uint256"
                            }
                        ],
                        "name": "NewDeposit",
                        "type": "event"
                    },
                    {
                        "anonymous": false,
                        "inputs": [
                            {
                                "indexed": false,
                                "internalType": "address",
                                "name": "user",
                                "type": "address"
                            }
                        ],
                        "name": "Newbie",
                        "type": "event"
                    },
                    {
                        "anonymous": false,
                        "inputs": [
                            {
                                "indexed": true,
                                "internalType": "address",
                                "name": "referrer",
                                "type": "address"
                            },
                            {
                                "indexed": true,
                                "internalType": "address",
                                "name": "referral",
                                "type": "address"
                            },
                            {
                                "indexed": true,
                                "internalType": "uint256",
                                "name": "level",
                                "type": "uint256"
                            },
                            {
                                "indexed": false,
                                "internalType": "uint256",
                                "name": "amount",
                                "type": "uint256"
                            }
                        ],
                        "name": "RefBonus",
                        "type": "event"
                    },
                    {
                        "anonymous": false,
                        "inputs": [
                            {
                                "indexed": true,
                                "internalType": "address",
                                "name": "user",
                                "type": "address"
                            },
                            {
                                "indexed": false,
                                "internalType": "uint256",
                                "name": "amount",
                                "type": "uint256"
                            }
                        ],
                        "name": "Withdrawn",
                        "type": "event"
                    },
                    {
                        "inputs": [

                        ],
                        "name": "FORCE_WITHDRAW_PENALTY",
                        "outputs": [
                            {
                                "internalType": "uint256",
                                "name": "",
                                "type": "uint256"
                            }
                        ],
                        "stateMutability": "view",
                        "type": "function"
                    },
                    {
                        "inputs": [

                        ],
                        "name": "INVEST_MAX_AMOUNT",
                        "outputs": [
                            {
                                "internalType": "uint256",
                                "name": "",
                                "type": "uint256"
                            }
                        ],
                        "stateMutability": "view",
                        "type": "function"
                    },
                    {
                        "inputs": [

                        ],
                        "name": "INVEST_MIN_AMOUNT",
                        "outputs": [
                            {
                                "internalType": "uint256",
                                "name": "",
                                "type": "uint256"
                            }
                        ],
                        "stateMutability": "view",
                        "type": "function"
                    },
                    {
                        "inputs": [

                        ],
                        "name": "LAUNCHED",
                        "outputs": [
                            {
                                "internalType": "bool",
                                "name": "",
                                "type": "bool"
                            }
                        ],
                        "stateMutability": "view",
                        "type": "function"
                    },
                    {
                        "inputs": [

                        ],
                        "name": "PERCENTS_DIVIDER",
                        "outputs": [
                            {
                                "internalType": "uint256",
                                "name": "",
                                "type": "uint256"
                            }
                        ],
                        "stateMutability": "view",
                        "type": "function"
                    },
                    {
                        "inputs": [

                        ],
                        "name": "PERCENT_STEP",
                        "outputs": [
                            {
                                "internalType": "uint256",
                                "name": "",
                                "type": "uint256"
                            }
                        ],
                        "stateMutability": "view",
                        "type": "function"
                    },
                    {
                        "inputs": [

                        ],
                        "name": "PROJECT_FEE",
                        "outputs": [
                            {
                                "internalType": "uint256",
                                "name": "",
                                "type": "uint256"
                            }
                        ],
                        "stateMutability": "view",
                        "type": "function"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "uint256",
                                "name": "",
                                "type": "uint256"
                            }
                        ],
                        "name": "REFERRAL_PERCENTS",
                        "outputs": [
                            {
                                "internalType": "uint256",
                                "name": "",
                                "type": "uint256"
                            }
                        ],
                        "stateMutability": "view",
                        "type": "function"
                    },
                    {
                        "inputs": [

                        ],
                        "name": "TIME_STEP",
                        "outputs": [
                            {
                                "internalType": "uint256",
                                "name": "",
                                "type": "uint256"
                            }
                        ],
                        "stateMutability": "view",
                        "type": "function"
                    },
                    {
                        "inputs": [

                        ],
                        "name": "WITHDRAW_FEE",
                        "outputs": [
                            {
                                "internalType": "uint256",
                                "name": "",
                                "type": "uint256"
                            }
                        ],
                        "stateMutability": "view",
                        "type": "function"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "uint256",
                                "name": "index",
                                "type": "uint256"
                            }
                        ],
                        "name": "forceWithdraw",
                        "outputs": [

                        ],
                        "stateMutability": "nonpayable",
                        "type": "function"
                    },
                    {
                        "inputs": [

                        ],
                        "name": "getContractBalance",
                        "outputs": [
                            {
                                "internalType": "uint256",
                                "name": "",
                                "type": "uint256"
                            }
                        ],
                        "stateMutability": "view",
                        "type": "function"
                    },
                    {
                        "inputs": [

                        ],
                        "name": "getContractInfo",
                        "outputs": [
                            {
                                "internalType": "uint256",
                                "name": "",
                                "type": "uint256"
                            },
                            {
                                "internalType": "uint256",
                                "name": "",
                                "type": "uint256"
                            },
                            {
                                "internalType": "uint256",
                                "name": "",
                                "type": "uint256"
                            }
                        ],
                        "stateMutability": "view",
                        "type": "function"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "uint8",
                                "name": "plan",
                                "type": "uint8"
                            }
                        ],
                        "name": "getPercent",
                        "outputs": [
                            {
                                "internalType": "uint256",
                                "name": "",
                                "type": "uint256"
                            }
                        ],
                        "stateMutability": "view",
                        "type": "function"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "uint8",
                                "name": "plan",
                                "type": "uint8"
                            }
                        ],
                        "name": "getPlanInfo",
                        "outputs": [
                            {
                                "internalType": "uint256",
                                "name": "time",
                                "type": "uint256"
                            },
                            {
                                "internalType": "uint256",
                                "name": "percent",
                                "type": "uint256"
                            }
                        ],
                        "stateMutability": "view",
                        "type": "function"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "uint8",
                                "name": "plan",
                                "type": "uint8"
                            },
                            {
                                "internalType": "uint256",
                                "name": "deposit",
                                "type": "uint256"
                            }
                        ],
                        "name": "getResult",
                        "outputs": [
                            {
                                "internalType": "uint256",
                                "name": "percent",
                                "type": "uint256"
                            },
                            {
                                "internalType": "uint256",
                                "name": "profit",
                                "type": "uint256"
                            },
                            {
                                "internalType": "uint256",
                                "name": "finish",
                                "type": "uint256"
                            }
                        ],
                        "stateMutability": "view",
                        "type": "function"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "address",
                                "name": "userAddress",
                                "type": "address"
                            }
                        ],
                        "name": "getUserAmountOfDeposits",
                        "outputs": [
                            {
                                "internalType": "uint256",
                                "name": "",
                                "type": "uint256"
                            }
                        ],
                        "stateMutability": "view",
                        "type": "function"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "address",
                                "name": "userAddress",
                                "type": "address"
                            }
                        ],
                        "name": "getUserAvailable",
                        "outputs": [
                            {
                                "internalType": "uint256",
                                "name": "",
                                "type": "uint256"
                            }
                        ],
                        "stateMutability": "view",
                        "type": "function"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "address",
                                "name": "userAddress",
                                "type": "address"
                            }
                        ],
                        "name": "getUserCheckpoint",
                        "outputs": [
                            {
                                "internalType": "uint256",
                                "name": "",
                                "type": "uint256"
                            }
                        ],
                        "stateMutability": "view",
                        "type": "function"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "address",
                                "name": "userAddress",
                                "type": "address"
                            },
                            {
                                "internalType": "uint256",
                                "name": "index",
                                "type": "uint256"
                            }
                        ],
                        "name": "getUserDepositInfo",
                        "outputs": [
                            {
                                "internalType": "uint8",
                                "name": "plan",
                                "type": "uint8"
                            },
                            {
                                "internalType": "uint256",
                                "name": "percent",
                                "type": "uint256"
                            },
                            {
                                "internalType": "uint256",
                                "name": "amount",
                                "type": "uint256"
                            },
                            {
                                "internalType": "uint256",
                                "name": "profit",
                                "type": "uint256"
                            },
                            {
                                "internalType": "uint256",
                                "name": "start",
                                "type": "uint256"
                            },
                            {
                                "internalType": "uint256",
                                "name": "finish",
                                "type": "uint256"
                            }
                        ],
                        "stateMutability": "view",
                        "type": "function"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "address",
                                "name": "userAddress",
                                "type": "address"
                            }
                        ],
                        "name": "getUserDividends",
                        "outputs": [
                            {
                                "internalType": "uint256",
                                "name": "",
                                "type": "uint256"
                            }
                        ],
                        "stateMutability": "view",
                        "type": "function"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "address",
                                "name": "userAddress",
                                "type": "address"
                            }
                        ],
                        "name": "getUserDownlineCount",
                        "outputs": [
                            {
                                "internalType": "uint256",
                                "name": "",
                                "type": "uint256"
                            }
                        ],
                        "stateMutability": "view",
                        "type": "function"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "address",
                                "name": "addr",
                                "type": "address"
                            }
                        ],
                        "name": "getUserInfo",
                        "outputs": [
                            {
                                "internalType": "uint256",
                                "name": "",
                                "type": "uint256"
                            },
                            {
                                "internalType": "uint256",
                                "name": "",
                                "type": "uint256"
                            },
                            {
                                "internalType": "uint256",
                                "name": "",
                                "type": "uint256"
                            },
                            {
                                "internalType": "uint256",
                                "name": "",
                                "type": "uint256"
                            },
                            {
                                "internalType": "uint256",
                                "name": "",
                                "type": "uint256"
                            }
                        ],
                        "stateMutability": "view",
                        "type": "function"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "address",
                                "name": "userAddress",
                                "type": "address"
                            }
                        ],
                        "name": "getUserReferralBonus",
                        "outputs": [
                            {
                                "internalType": "uint256",
                                "name": "",
                                "type": "uint256"
                            }
                        ],
                        "stateMutability": "view",
                        "type": "function"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "address",
                                "name": "userAddress",
                                "type": "address"
                            }
                        ],
                        "name": "getUserReferralTotalBonus",
                        "outputs": [
                            {
                                "internalType": "uint256",
                                "name": "",
                                "type": "uint256"
                            }
                        ],
                        "stateMutability": "view",
                        "type": "function"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "address",
                                "name": "userAddress",
                                "type": "address"
                            }
                        ],
                        "name": "getUserReferralWithdrawn",
                        "outputs": [
                            {
                                "internalType": "uint256",
                                "name": "",
                                "type": "uint256"
                            }
                        ],
                        "stateMutability": "view",
                        "type": "function"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "address",
                                "name": "userAddress",
                                "type": "address"
                            }
                        ],
                        "name": "getUserReferrer",
                        "outputs": [
                            {
                                "internalType": "address",
                                "name": "",
                                "type": "address"
                            }
                        ],
                        "stateMutability": "view",
                        "type": "function"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "address",
                                "name": "userAddress",
                                "type": "address"
                            }
                        ],
                        "name": "getUserTotalDeposits",
                        "outputs": [
                            {
                                "internalType": "uint256",
                                "name": "amount",
                                "type": "uint256"
                            }
                        ],
                        "stateMutability": "view",
                        "type": "function"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "address",
                                "name": "userAddress",
                                "type": "address"
                            }
                        ],
                        "name": "getUserTotalWithdrawn",
                        "outputs": [
                            {
                                "internalType": "uint256",
                                "name": "amount",
                                "type": "uint256"
                            }
                        ],
                        "stateMutability": "view",
                        "type": "function"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "address",
                                "name": "userAddress",
                                "type": "address"
                            }
                        ],
                        "name": "getUserWithdrawn",
                        "outputs": [
                            {
                                "internalType": "uint256",
                                "name": "",
                                "type": "uint256"
                            }
                        ],
                        "stateMutability": "view",
                        "type": "function"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "address payable",
                                "name": "referrer",
                                "type": "address"
                            },
                            {
                                "internalType": "uint8",
                                "name": "plan",
                                "type": "uint8"
                            }
                        ],
                        "name": "invest",
                        "outputs": [

                        ],
                        "stateMutability": "payable",
                        "type": "function"
                    },
                    {
                        "inputs": [

                        ],
                        "name": "launch",
                        "outputs": [

                        ],
                        "stateMutability": "nonpayable",
                        "type": "function"
                    },
                    {
                        "inputs": [

                        ],
                        "name": "startUNIX",
                        "outputs": [
                            {
                                "internalType": "uint256",
                                "name": "",
                                "type": "uint256"
                            }
                        ],
                        "stateMutability": "view",
                        "type": "function"
                    },
                    {
                        "inputs": [

                        ],
                        "name": "totalRefBonus",
                        "outputs": [
                            {
                                "internalType": "uint256",
                                "name": "",
                                "type": "uint256"
                            }
                        ],
                        "stateMutability": "view",
                        "type": "function"
                    },
                    {
                        "inputs": [

                        ],
                        "name": "totalStaked",
                        "outputs": [
                            {
                                "internalType": "uint256",
                                "name": "",
                                "type": "uint256"
                            }
                        ],
                        "stateMutability": "view",
                        "type": "function"
                    },
                    {
                        "inputs": [

                        ],
                        "name": "totalUsers",
                        "outputs": [
                            {
                                "internalType": "uint256",
                                "name": "",
                                "type": "uint256"
                            }
                        ],
                        "stateMutability": "view",
                        "type": "function"
                    },
                    {
                        "inputs": [

                        ],
                        "name": "withdraw",
                        "outputs": [

                        ],
                        "stateMutability": "nonpayable",
                        "type": "function"
                    }
                ],
                Nt = [
                    {
                        "inputs": [
                            {
                                "internalType": "address payable",
                                "name": "_commissionWallet",
                                "type": "address"
                            },
                            {
                                "internalType": "address",
                                "name": "_tokenAddr",
                                "type": "address"
                            }
                        ],
                        "stateMutability": "nonpayable",
                        "type": "constructor"
                    },
                    {
                        "anonymous": false,
                        "inputs": [
                            {
                                "indexed": true,
                                "internalType": "address",
                                "name": "user",
                                "type": "address"
                            },
                            {
                                "indexed": false,
                                "internalType": "uint256",
                                "name": "totalAmount",
                                "type": "uint256"
                            }
                        ],
                        "name": "FeePayed",
                        "type": "event"
                    },
                    {
                        "anonymous": false,
                        "inputs": [
                            {
                                "indexed": true,
                                "internalType": "address",
                                "name": "user",
                                "type": "address"
                            },
                            {
                                "indexed": false,
                                "internalType": "uint8",
                                "name": "plan",
                                "type": "uint8"
                            },
                            {
                                "indexed": false,
                                "internalType": "uint256",
                                "name": "percent",
                                "type": "uint256"
                            },
                            {
                                "indexed": false,
                                "internalType": "uint256",
                                "name": "amount",
                                "type": "uint256"
                            },
                            {
                                "indexed": false,
                                "internalType": "uint256",
                                "name": "profit",
                                "type": "uint256"
                            },
                            {
                                "indexed": false,
                                "internalType": "uint256",
                                "name": "start",
                                "type": "uint256"
                            },
                            {
                                "indexed": false,
                                "internalType": "uint256",
                                "name": "finish",
                                "type": "uint256"
                            }
                        ],
                        "name": "NewDeposit",
                        "type": "event"
                    },
                    {
                        "anonymous": false,
                        "inputs": [
                            {
                                "indexed": false,
                                "internalType": "address",
                                "name": "user",
                                "type": "address"
                            }
                        ],
                        "name": "Newbie",
                        "type": "event"
                    },
                    {
                        "anonymous": false,
                        "inputs": [
                            {
                                "indexed": true,
                                "internalType": "address",
                                "name": "referrer",
                                "type": "address"
                            },
                            {
                                "indexed": true,
                                "internalType": "address",
                                "name": "referral",
                                "type": "address"
                            },
                            {
                                "indexed": true,
                                "internalType": "uint256",
                                "name": "level",
                                "type": "uint256"
                            },
                            {
                                "indexed": false,
                                "internalType": "uint256",
                                "name": "amount",
                                "type": "uint256"
                            }
                        ],
                        "name": "RefBonus",
                        "type": "event"
                    },
                    {
                        "anonymous": false,
                        "inputs": [
                            {
                                "indexed": true,
                                "internalType": "address",
                                "name": "user",
                                "type": "address"
                            },
                            {
                                "indexed": false,
                                "internalType": "uint256",
                                "name": "amount",
                                "type": "uint256"
                            }
                        ],
                        "name": "Withdrawn",
                        "type": "event"
                    },
                    {
                        "inputs": [

                        ],
                        "name": "FORCE_WITHDRAW_PENALTY",
                        "outputs": [
                            {
                                "internalType": "uint256",
                                "name": "",
                                "type": "uint256"
                            }
                        ],
                        "stateMutability": "view",
                        "type": "function"
                    },
                    {
                        "inputs": [

                        ],
                        "name": "INVEST_MAX_AMOUNT",
                        "outputs": [
                            {
                                "internalType": "uint256",
                                "name": "",
                                "type": "uint256"
                            }
                        ],
                        "stateMutability": "view",
                        "type": "function"
                    },
                    {
                        "inputs": [

                        ],
                        "name": "INVEST_MIN_AMOUNT",
                        "outputs": [
                            {
                                "internalType": "uint256",
                                "name": "",
                                "type": "uint256"
                            }
                        ],
                        "stateMutability": "view",
                        "type": "function"
                    },
                    {
                        "inputs": [

                        ],
                        "name": "LAUNCHED",
                        "outputs": [
                            {
                                "internalType": "bool",
                                "name": "",
                                "type": "bool"
                            }
                        ],
                        "stateMutability": "view",
                        "type": "function"
                    },
                    {
                        "inputs": [

                        ],
                        "name": "PERCENTS_DIVIDER",
                        "outputs": [
                            {
                                "internalType": "uint256",
                                "name": "",
                                "type": "uint256"
                            }
                        ],
                        "stateMutability": "view",
                        "type": "function"
                    },
                    {
                        "inputs": [

                        ],
                        "name": "PERCENT_STEP",
                        "outputs": [
                            {
                                "internalType": "uint256",
                                "name": "",
                                "type": "uint256"
                            }
                        ],
                        "stateMutability": "view",
                        "type": "function"
                    },
                    {
                        "inputs": [

                        ],
                        "name": "PROJECT_FEE",
                        "outputs": [
                            {
                                "internalType": "uint256",
                                "name": "",
                                "type": "uint256"
                            }
                        ],
                        "stateMutability": "view",
                        "type": "function"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "uint256",
                                "name": "",
                                "type": "uint256"
                            }
                        ],
                        "name": "REFERRAL_PERCENTS",
                        "outputs": [
                            {
                                "internalType": "uint256",
                                "name": "",
                                "type": "uint256"
                            }
                        ],
                        "stateMutability": "view",
                        "type": "function"
                    },
                    {
                        "inputs": [

                        ],
                        "name": "TIME_STEP",
                        "outputs": [
                            {
                                "internalType": "uint256",
                                "name": "",
                                "type": "uint256"
                            }
                        ],
                        "stateMutability": "view",
                        "type": "function"
                    },
                    {
                        "inputs": [

                        ],
                        "name": "WITHDRAW_FEE",
                        "outputs": [
                            {
                                "internalType": "uint256",
                                "name": "",
                                "type": "uint256"
                            }
                        ],
                        "stateMutability": "view",
                        "type": "function"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "uint256",
                                "name": "index",
                                "type": "uint256"
                            }
                        ],
                        "name": "forceWithdraw",
                        "outputs": [

                        ],
                        "stateMutability": "nonpayable",
                        "type": "function"
                    },
                    {
                        "inputs": [

                        ],
                        "name": "getContractBalance",
                        "outputs": [
                            {
                                "internalType": "uint256",
                                "name": "",
                                "type": "uint256"
                            }
                        ],
                        "stateMutability": "view",
                        "type": "function"
                    },
                    {
                        "inputs": [

                        ],
                        "name": "getContractInfo",
                        "outputs": [
                            {
                                "internalType": "uint256",
                                "name": "",
                                "type": "uint256"
                            },
                            {
                                "internalType": "uint256",
                                "name": "",
                                "type": "uint256"
                            },
                            {
                                "internalType": "uint256",
                                "name": "",
                                "type": "uint256"
                            }
                        ],
                        "stateMutability": "view",
                        "type": "function"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "uint8",
                                "name": "plan",
                                "type": "uint8"
                            }
                        ],
                        "name": "getPercent",
                        "outputs": [
                            {
                                "internalType": "uint256",
                                "name": "",
                                "type": "uint256"
                            }
                        ],
                        "stateMutability": "view",
                        "type": "function"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "uint8",
                                "name": "plan",
                                "type": "uint8"
                            }
                        ],
                        "name": "getPlanInfo",
                        "outputs": [
                            {
                                "internalType": "uint256",
                                "name": "time",
                                "type": "uint256"
                            },
                            {
                                "internalType": "uint256",
                                "name": "percent",
                                "type": "uint256"
                            }
                        ],
                        "stateMutability": "view",
                        "type": "function"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "uint8",
                                "name": "plan",
                                "type": "uint8"
                            },
                            {
                                "internalType": "uint256",
                                "name": "deposit",
                                "type": "uint256"
                            }
                        ],
                        "name": "getResult",
                        "outputs": [
                            {
                                "internalType": "uint256",
                                "name": "percent",
                                "type": "uint256"
                            },
                            {
                                "internalType": "uint256",
                                "name": "profit",
                                "type": "uint256"
                            },
                            {
                                "internalType": "uint256",
                                "name": "finish",
                                "type": "uint256"
                            }
                        ],
                        "stateMutability": "view",
                        "type": "function"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "address",
                                "name": "userAddress",
                                "type": "address"
                            }
                        ],
                        "name": "getUserAmountOfDeposits",
                        "outputs": [
                            {
                                "internalType": "uint256",
                                "name": "",
                                "type": "uint256"
                            }
                        ],
                        "stateMutability": "view",
                        "type": "function"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "address",
                                "name": "userAddress",
                                "type": "address"
                            }
                        ],
                        "name": "getUserAvailable",
                        "outputs": [
                            {
                                "internalType": "uint256",
                                "name": "",
                                "type": "uint256"
                            }
                        ],
                        "stateMutability": "view",
                        "type": "function"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "address",
                                "name": "userAddress",
                                "type": "address"
                            }
                        ],
                        "name": "getUserCheckpoint",
                        "outputs": [
                            {
                                "internalType": "uint256",
                                "name": "",
                                "type": "uint256"
                            }
                        ],
                        "stateMutability": "view",
                        "type": "function"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "address",
                                "name": "userAddress",
                                "type": "address"
                            },
                            {
                                "internalType": "uint256",
                                "name": "index",
                                "type": "uint256"
                            }
                        ],
                        "name": "getUserDepositInfo",
                        "outputs": [
                            {
                                "internalType": "uint8",
                                "name": "plan",
                                "type": "uint8"
                            },
                            {
                                "internalType": "uint256",
                                "name": "percent",
                                "type": "uint256"
                            },
                            {
                                "internalType": "uint256",
                                "name": "amount",
                                "type": "uint256"
                            },
                            {
                                "internalType": "uint256",
                                "name": "profit",
                                "type": "uint256"
                            },
                            {
                                "internalType": "uint256",
                                "name": "start",
                                "type": "uint256"
                            },
                            {
                                "internalType": "uint256",
                                "name": "finish",
                                "type": "uint256"
                            }
                        ],
                        "stateMutability": "view",
                        "type": "function"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "address",
                                "name": "userAddress",
                                "type": "address"
                            }
                        ],
                        "name": "getUserDividends",
                        "outputs": [
                            {
                                "internalType": "uint256",
                                "name": "",
                                "type": "uint256"
                            }
                        ],
                        "stateMutability": "view",
                        "type": "function"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "address",
                                "name": "userAddress",
                                "type": "address"
                            }
                        ],
                        "name": "getUserDownlineCount",
                        "outputs": [
                            {
                                "internalType": "uint256",
                                "name": "",
                                "type": "uint256"
                            }
                        ],
                        "stateMutability": "view",
                        "type": "function"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "address",
                                "name": "addr",
                                "type": "address"
                            }
                        ],
                        "name": "getUserInfo",
                        "outputs": [
                            {
                                "internalType": "uint256",
                                "name": "",
                                "type": "uint256"
                            },
                            {
                                "internalType": "uint256",
                                "name": "",
                                "type": "uint256"
                            },
                            {
                                "internalType": "uint256",
                                "name": "",
                                "type": "uint256"
                            },
                            {
                                "internalType": "uint256",
                                "name": "",
                                "type": "uint256"
                            },
                            {
                                "internalType": "uint256",
                                "name": "",
                                "type": "uint256"
                            }
                        ],
                        "stateMutability": "view",
                        "type": "function"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "address",
                                "name": "userAddress",
                                "type": "address"
                            }
                        ],
                        "name": "getUserReferralBonus",
                        "outputs": [
                            {
                                "internalType": "uint256",
                                "name": "",
                                "type": "uint256"
                            }
                        ],
                        "stateMutability": "view",
                        "type": "function"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "address",
                                "name": "userAddress",
                                "type": "address"
                            }
                        ],
                        "name": "getUserReferralTotalBonus",
                        "outputs": [
                            {
                                "internalType": "uint256",
                                "name": "",
                                "type": "uint256"
                            }
                        ],
                        "stateMutability": "view",
                        "type": "function"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "address",
                                "name": "userAddress",
                                "type": "address"
                            }
                        ],
                        "name": "getUserReferralWithdrawn",
                        "outputs": [
                            {
                                "internalType": "uint256",
                                "name": "",
                                "type": "uint256"
                            }
                        ],
                        "stateMutability": "view",
                        "type": "function"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "address",
                                "name": "userAddress",
                                "type": "address"
                            }
                        ],
                        "name": "getUserReferrer",
                        "outputs": [
                            {
                                "internalType": "address",
                                "name": "",
                                "type": "address"
                            }
                        ],
                        "stateMutability": "view",
                        "type": "function"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "address",
                                "name": "userAddress",
                                "type": "address"
                            }
                        ],
                        "name": "getUserTotalDeposits",
                        "outputs": [
                            {
                                "internalType": "uint256",
                                "name": "amount",
                                "type": "uint256"
                            }
                        ],
                        "stateMutability": "view",
                        "type": "function"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "address",
                                "name": "userAddress",
                                "type": "address"
                            }
                        ],
                        "name": "getUserTotalWithdrawn",
                        "outputs": [
                            {
                                "internalType": "uint256",
                                "name": "amount",
                                "type": "uint256"
                            }
                        ],
                        "stateMutability": "view",
                        "type": "function"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "address",
                                "name": "userAddress",
                                "type": "address"
                            }
                        ],
                        "name": "getUserWithdrawn",
                        "outputs": [
                            {
                                "internalType": "uint256",
                                "name": "",
                                "type": "uint256"
                            }
                        ],
                        "stateMutability": "view",
                        "type": "function"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "address payable",
                                "name": "referrer",
                                "type": "address"
                            },
                            {
                                "internalType": "uint8",
                                "name": "plan",
                                "type": "uint8"
                            },
                            {
                                "internalType": "uint256",
                                "name": "amount",
                                "type": "uint256"
                            }
                        ],
                        "name": "invest",
                        "outputs": [

                        ],
                        "stateMutability": "nonpayable",
                        "type": "function"
                    },
                    {
                        "inputs": [

                        ],
                        "name": "launch",
                        "outputs": [

                        ],
                        "stateMutability": "nonpayable",
                        "type": "function"
                    },
                    {
                        "inputs": [

                        ],
                        "name": "startUNIX",
                        "outputs": [
                            {
                                "internalType": "uint256",
                                "name": "",
                                "type": "uint256"
                            }
                        ],
                        "stateMutability": "view",
                        "type": "function"
                    },
                    {
                        "inputs": [

                        ],
                        "name": "token",
                        "outputs": [
                            {
                                "internalType": "contract IERC20",
                                "name": "",
                                "type": "address"
                            }
                        ],
                        "stateMutability": "view",
                        "type": "function"
                    },
                    {
                        "inputs": [

                        ],
                        "name": "totalRefBonus",
                        "outputs": [
                            {
                                "internalType": "uint256",
                                "name": "",
                                "type": "uint256"
                            }
                        ],
                        "stateMutability": "view",
                        "type": "function"
                    },
                    {
                        "inputs": [

                        ],
                        "name": "totalStaked",
                        "outputs": [
                            {
                                "internalType": "uint256",
                                "name": "",
                                "type": "uint256"
                            }
                        ],
                        "stateMutability": "view",
                        "type": "function"
                    },
                    {
                        "inputs": [

                        ],
                        "name": "totalUsers",
                        "outputs": [
                            {
                                "internalType": "uint256",
                                "name": "",
                                "type": "uint256"
                            }
                        ],
                        "stateMutability": "view",
                        "type": "function"
                    },
                    {
                        "inputs": [

                        ],
                        "name": "withdraw",
                        "outputs": [

                        ],
                        "stateMutability": "nonpayable",
                        "type": "function"
                    }
                ],
                T = {
                    bts: {
                        contract: "0x033433387463133E76b9a45DB7FB500362D365b3",
                        chainId: "97",
                        projectId: "40",
                        color: "F3BA2F",
                        bonusamount: 0,
                        displaydecimals: 5,
                        logoname: "bnb.png",
                        fullName: "BSC Testnet",
                        ABI: N,
                        title: "bts",
                        mindeposit: 10,
                        txnfee: .0012,
                        rpcURl: "https://data-seed-prebsc-1-s1.binance.org:8545",
                        explorerlink: ["https://testnet.bscscan.com/"],
                        blockchain: "Binance Smart Chain Testnet",
                        type: "0",
                        tokenId: "binancecoin",
                        mintransactionamount: .023,
                        maxtransactionamount: 5,
                        unit: "tBNB",
                        explorer: "https://testnet.bscscan.com//",
                        networkData: [{
                            chainId: "0x61",
                            chainName: "BSCTESTNET",
                            rpcUrls: ["https://data-seed-prebsc-1-s1.binance.org:8545"],
                            nativeCurrency: {
                                name: "BINANCE COIN",
                                symbol: "tBNB",
                                decimals: 18
                            },
                            blockExplorerUrls: ["https://bscscan.com/"]
                        }]
                    },
                    bsc: {
                        contract: "0x2D2Bd74d661bbBb99763BF614478D65dc335b437",
                        chainId: "56",
                        projectId: "40",
                        color: "F3BA2F",
                        bonusamount: 0,
                        displaydecimals: 5,
                        logoname: "bnb.png",
                        fullName: "Binance Smart Chain",
                        ABI: N,
                        title: "bsc",
                        mindeposit: 10,
                        txnfee: .0012,
                        rpcURl: "https://bsc-dataseed.binance.org",
                        explorerlink: ["https://bscscan.com/address/0x2D2Bd74d661bbBb99763BF614478D65dc335b437"],
                        blockchain: "Binance Smart Chain",
                        type: "0",
                        tokenId: "binancecoin",
                        mintransactionamount: .023,
                        maxtransactionamount: 5,
                        unit: "BNB",
                        explorer: "https://bscscan.com/tx/",
                        networkData: [{
                            chainId: "0x38",
                            chainName: "BSCMAINET",
                            rpcUrls: ["https://bsc-dataseed.binance.org"],
                            nativeCurrency: {
                                name: "BINANCE COIN",
                                symbol: "BNB",
                                decimals: 18
                            },
                            blockExplorerUrls: ["https://bscscan.com/"]
                        }]
                    },
                    rop: {
                        contract: "0x8522cba06D022e32Bdd87e632A3Ee19148b29153",
                        chainId: "3",
                        projectId: "44",
                        color: "F3BA2F",
                        bonusamount: 0,
                        displaydecimals: 2,
                        logoname: "eth.png",
                        fullName: "Ropsten",
                        ABI: N,
                        mindeposit: 10,
                        txnfee: 10,
                        mintransactionamount: 1,
                        maxtransactionamount: 1000,
                        title: "rop",
                        rpcURl: "https://ropsten.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161",
                        explorerlink: ["https://ropsten.etherscan.io"],
                        blockchain: "Ropsten",
                        type: "0",
                        tokenId: "ethereum",
                        unit: "ETH",
                        explorer: "https://ropsten.etherscan.io",
                        networkData: [{
                            chainId: "0x0003",
                            chainName: "Ropsten",
                            rpcUrls: ["https://ropsten.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161"],
                            nativeCurrency: {
                                name: "Ethereum",
                                symbol: "ETH",
                                decimals: 18
                            },
                            blockExplorerUrls: ["https://ropsten.etherscan.io"]
                        }]
                    },
                    eth: {
                        contract: "0xb263ffbb2e9bccc82f02c0e27d1dbe7ff15d0649",
                        chainId: "1",
                        projectId: "43",
                        color: "F3BA2F",
                        bonusamount: 0,
                        displaydecimals: 2,
                        logoname: "eth.png",
                        fullName: "Ethereum",
                        ABI: N,
                        mindeposit: 10,
                        txnfee: 10,
                        mintransactionamount: 1,
                        maxtransactionamount: 1000,
                        title: "eth",
                        rpcURl: "https://mainnet.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161",
                        explorerlink: ["https://etherscan.io/"],
                        blockchain: "Ethereum",
                        type: "0",
                        tokenId: "ethereum",
                        unit: "ETH",
                        explorer: "https://etherscan.io/",
                        networkData: [{
                            chainId: "0x0003",
                            chainName: "Ethereum",
                            rpcUrls: ["https://mainnet.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161"],
                            nativeCurrency: {
                                name: "Ethereum",
                                symbol: "ETH",
                                decimals: 18
                            },
                            blockExplorerUrls: ["https://etherscan.io/"]
                        }]
                    },
                    ats: {
                        contract: "0xA2B5fb9C0eA6FfFEaAbe1846ED3b2596A85D34f2",
                        TokenContract: "0x57854f181a2e26df9CD47c56032923f51D88d2bF",
                        chainId: "1",
                        projectId: "46",
                        color: "F3BA2F",
                        bonusamount: 0,
                        displaydecimals: 2,
                        logoname: "ape.png",
                        fullName: "Ropsten",
                        ABI: Nt,
                        mindeposit: 10,
                        txnfee: 10,
                        mintransactionamount: 1,
                        maxtransactionamount: 1000,
                        title: "ats",
                        rpcURl: "https://ropsten.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161",
                        explorerlink: ["https://ropsten.etherscan.io/"],
                        blockchain: "Ropsten",
                        type: "2",
                        tokenId: "apecoin",
                        unit: "APE",
                        explorer: "https://ropsten.etherscan.io/",
                        networkData: [{
                            chainId: "0x0003",
                            chainName: "Ethereum Testnet",
                            rpcUrls: ["https://ropsten.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161"],
                            nativeCurrency: {
                                name: "Ethereum",
                                symbol: "ETH",
                                decimals: 18
                            },
                            blockExplorerUrls: ["https://etherscan.io/"]
                        }]
                    },
                    ape: {
                        contract: "0x1D6f11EC9510d3a1f7C77160cC807ccf1bEBaEC7",
                        chainId: "1",
                        projectId: "43",
                        color: "F3BA2F",
                        bonusamount: 0,
                        displaydecimals: 2,
                        logoname: "ape.png",
                        fullName: "Ethereum",
                        ABI: Nt,
                        mindeposit: 10,
                        txnfee: 10,
                        mintransactionamount: 1,
                        maxtransactionamount: 1000,
                        title: "ape",
                        rpcURl: "https://mainnet.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161",
                        explorerlink: ["https://etherscan.io/"],
                        blockchain: "Ethereum",
                        type: "2",
                        tokenId: "apecoin",
                        unit: "APE",
                        explorer: "https://etherscan.io/",
                        networkData: [{
                            chainId: "0x0003",
                            chainName: "Ethereum",
                            rpcUrls: ["https://mainnet.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161"],
                            nativeCurrency: {
                                name: "Ethereum",
                                symbol: "ETH",
                                decimals: 18
                            },
                            blockExplorerUrls: ["https://etherscan.io/"]
                        }]
                    }
                    /*
                    avax: {
                        contract: "0x546a5048c49b9a081a43675d2052f0b5d1449d7d",
                        chainId: "43114",
                        projectId: "41",
                        color: "F3BA2F",
                        bonusamount: 0,
                        displaydecimals: 5,
                        logoname: "avax.png",
                        fullName: "Avalanche Network",
                        ABI: N,
                        mindeposit: 10,
                        txnfee: .1,
                        mintransactionamount: .15,
                        maxtransactionamount: 5,
                        title: "avax",
                        rpcURl: "https://api.avax.network/ext/bc/C/rpc",
                        explorerlink: ["https://snowtrace.io/address/0x546a5048c49b9a081a43675d2052f0b5d1449d7d"],
                        blockchain: "Avalanche C-Chain",
                        type: "0",
                        tokenId: "avalanche-2",
                        unit: "AVAX",
                        explorer: "https://snowtrace.io/tx/",
                        networkData: [{
                            chainId: "0xA86A",
                            chainName: "Avalanche Network",
                            rpcUrls: ["https://api.avax.network/ext/bc/C/rpc"],
                            nativeCurrency: {
                                name: "Avalanche Network",
                                symbol: "AVAX",
                                decimals: 18
                            },
                            blockExplorerUrls: ["https://snowtrace.io/"]
                        }]
                    },
                    fantom: {
                        contract: "0xb263ffbb2e9bccc82f02c0e27d1dbe7ff15d0649",
                        chainId: "250",
                        projectId: "41",
                        color: "F3BA2F",
                        bonusamount: 0,
                        displaydecimals: 5,
                        logoname: "ftm.png",
                        fullName: "Fantom",
                        ABI: N,
                        mindeposit: 10,
                        txnfee: .12,
                        mintransactionamount: 10,
                        maxtransactionamount: 1e3,
                        title: "fantom",
                        rpcURl: "https://rpcapi.fantom.network",
                        explorerlink: ["https://ftmscan.com/address/0xb263ffbb2e9bccc82f02c0e27d1dbe7ff15d0649"],
                        blockchain: "Fantom Opera",
                        type: "0",
                        tokenId: "fantom",
                        unit: "FTM",
                        explorer: "https://viewblock.io/thundercore/tx/",
                        networkData: [{
                            chainId: "0xFA",
                            chainName: "Fantom Opera",
                            rpcUrls: ["https://rpcapi.fantom.network/"],
                            nativeCurrency: {
                                name: "Fantom Opera",
                                symbol: "FTM",
                                decimals: 18
                            },
                            blockExplorerUrls: ["https://ftmscan.com"]
                        }]
                    },
                    polygon: {
                        contract: "0x546a5048c49b9a081a43675d2052f0b5d1449d7d",
                        chainId: "137",
                        color: "8247E5",
                        projectId: "42",
                        bonusamount: 0,
                        displaydecimals: 5,
                        fullName: "Polygon",
                        logoname: "matic.png",
                        ABI: N,
                        mindeposit: 10,
                        title: "polygon",
                        txnfee: .2,
                        mintransactionamount: 5,
                        maxtransactionamount: 2100,
                        rpcURl: "https://polygon-rpc.com",
                        explorerlink: ["https://polygonscan.com/address/0x546a5048c49b9a081a43675d2052f0b5d1449d7d"],
                        blockchain: "Polygon Chain",
                        type: "0",
                        tokenId: "matic-network",
                        unit: "MATIC",
                        explorer: "https://polygonscan.com/tx/",
                        networkData: [{
                            chainId: "0x89",
                            chainName: "Matic Mainnet",
                            rpcUrls: ["https://polygon-rpc.com"],
                            nativeCurrency: {
                                name: "MATIC",
                                symbol: "MATIC",
                                decimals: 18
                            },
                            blockExplorerUrls: ["https://polygonscan.com/"]
                        }]
                    },
                    tt: {
                        contract: "0xb263fFbb2e9BcCc82f02c0e27d1DbE7ff15d0649",
                        chainId: "108",
                        projectId: "41",
                        color: "F3BA2F",
                        bonusamount: 0,
                        displaydecimals: 5,
                        logoname: "tt.png",
                        fullName: "Thunder Core",
                        ABI: N,
                        mindeposit: 10,
                        txnfee: 10,
                        mintransactionamount: 10,
                        maxtransactionamount: 1e3,
                        title: "tt",
                        rpcURl: "https://mainnet-rpc.thundercore.com",
                        explorerlink: ["https://viewblock.io/thundercore/address/0xb263fFbb2e9BcCc82f02c0e27d1DbE7ff15d0649"],
                        blockchain: "Thunder Core Chain",
                        type: "0",
                        tokenId: "thunder-token",
                        unit: "TT",
                        explorer: "https://viewblock.io/thundercore/tx/",
                        networkData: [{
                            chainId: "0x6C",
                            chainName: "Thunder Core",
                            rpcUrls: ["https://mainnet-rpc.thundercore.com"],
                            nativeCurrency: {
                                name: "Thunder Core",
                                symbol: "TT",
                                decimals: 18
                            },
                            blockExplorerUrls: ["https://viewblock.io/thundercore"]
                        }]
                    },
                    cro: {
                        contract: "0xb263ffbb2e9bccc82f02c0e27d1dbe7ff15d0649",
                        chainId: "108",
                        projectId: "41",
                        color: "F3BA2F",
                        bonusamount: 0,
                        displaydecimals: 5,
                        logoname: "cro.png",
                        fullName: "Crono chain",
                        ABI: N,
                        mindeposit: 10,
                        txnfee: 10,
                        mintransactionamount: 10,
                        maxtransactionamount: 1e3,
                        title: "cro",
                        rpcURl: "https://evm-cronos.crypto.org",
                        explorerlink: ["https://cronos.org/explorer/address/0xb263ffbb2e9bccc82f02c0e27d1dbe7ff15d0649"],
                        blockchain: "Crono chain",
                        type: "0",
                        tokenId: "crypto-com-chain",
                        unit: "CRO",
                        explorer: "https://cronos.crypto.org/explorer/tx/",
                        networkData: [{
                            chainId: "0x19",
                            chainName: "Cronos Mainnet",
                            rpcUrls: ["https://evm-cronos.crypto.org"],
                            nativeCurrency: {
                                name: "Crono chai",
                                symbol: "CRO",
                                decimals: 18
                            },
                            blockExplorerUrls: ["https://cronos.crypto.org/explorer/"]
                        }]
                    },
                    */
                },
                S = n(63),
                I = n(380),
                _ = function (e) {
                    if ("string" === typeof e) return e.substring(0, 5) + "..." + e.substring(e.length - 5, e.length)
                },
                M = function (e, t, n) {
                    for (var a = 1, s = 0; s < n; s++) a *= 10;
                    return t *= a, e *= a, Math.floor(Math.random() * (t - e + 1) + e) / a
                },
                C = function (e, t) {
                    t && (e = Number(e).toFixed(t));
                    var n = e.toString().split(".");
                    return n[0] = n[0].replace(/(\d)(?=(\d{3})+$)/g, "$1,"), n.join(".")
                },
                E = n(2),
                A = function (e) {
                    var t = e.receipt,
                        n = e.explorer,
                        a = e.type;
                    return Object(E.jsxs)(E.Fragment, {
                        children: [Object(E.jsx)("p", {
                            className: "big",
                            children: Object(E.jsx)("span", {
                                className: "key toasttextcolor",
                                children: "Your Receipt"
                            })
                        }), Object(E.jsxs)("p", {
                            className: "small",
                            children: [Object(E.jsx)("span", {
                                className: "key toasttextcolor",
                                children: "TransactionHash: "
                            }), " ", Object(E.jsx)("a", {
                                href: "".concat(n).concat(t.blockHash),
                                target: "_blank",
                                rel: "noreferrer",
                                children: Object(E.jsxs)("b", {
                                    className: "value toast-msg-tx",
                                    children: [" ", _(t.blockHash)]
                                })
                            })]
                        }), Object(E.jsxs)("p", {
                            className: "small",
                            children: [Object(E.jsx)("span", {
                                className: "key toasttextcolor",
                                children: "Status:"
                            }), " ", Object(E.jsx)("b", {
                                className: "value toasttextcolor",
                                children: t.status && "Success"
                            })]
                        }), Object(E.jsxs)("p", {
                            className: "small",
                            children: [Object(E.jsx)("span", {
                                className: "key toasttextcolor",
                                children: "BlockNumber:"
                            }), " ", Object(E.jsx)("b", {
                                className: "value toasttextcolor",
                                children: t.blockNumber
                            })]
                        }), Object(E.jsxs)("p", {
                            className: "small",
                            children: [Object(E.jsxs)("span", {
                                className: "key toasttextcolor",
                                children: [" ", "gameplay" === a ? "Status:" : "", " "]
                            }), " ", Object(E.jsx)("span", {
                                className: "key toasttextcolor",
                                children: "gameplay" === a ? null == t.events.Lose ? "You Win" : "You Lost" : " "
                            }), " "]
                        }), Object(E.jsx)("a", {
                            className: "receipt-btn",
                            href: "".concat(n).concat(t.transactionHash),
                            target: "_blank",
                            rel: "noreferrer",
                            children: "Show More"
                        })]
                    })
                },
                D = new v.a({
                    fullNode: "https://api.trongrid.io",
                    solidityNode: "https://api.trongrid.io",
                    eventServer: "https://api.trongrid.io",
                    privateKey: "b04a7db786ff2168123c98306acbabca5d6325f7be0d8102ab8778d6751832eb"
                }),
                R = [{
                    constant: !0,
                    inputs: [],
                    name: "name",
                    outputs: [{
                        name: "",
                        type: "string"
                    }],
                    payable: !1,
                    stateMutability: "view",
                    type: "function"
                }, {
                    constant: !1,
                    inputs: [{
                        name: "spender",
                        type: "address"
                    }, {
                        name: "value",
                        type: "uint256"
                    }],
                    name: "approve",
                    outputs: [{
                        name: "",
                        type: "bool"
                    }],
                    payable: !1,
                    stateMutability: "nonpayable",
                    type: "function"
                }, {
                    constant: !0,
                    inputs: [],
                    name: "totalSupply",
                    outputs: [{
                        name: "",
                        type: "uint256"
                    }],
                    payable: !1,
                    stateMutability: "view",
                    type: "function"
                }, {
                    constant: !1,
                    inputs: [{
                        name: "from",
                        type: "address"
                    }, {
                        name: "to",
                        type: "address"
                    }, {
                        name: "value",
                        type: "uint256"
                    }],
                    name: "transferFrom",
                    outputs: [{
                        name: "",
                        type: "bool"
                    }],
                    payable: !1,
                    stateMutability: "nonpayable",
                    type: "function"
                }, {
                    constant: !0,
                    inputs: [{
                        name: "",
                        type: "address"
                    }],
                    name: "balances",
                    outputs: [{
                        name: "",
                        type: "uint256"
                    }],
                    payable: !1,
                    stateMutability: "view",
                    type: "function"
                }, {
                    constant: !0,
                    inputs: [],
                    name: "decimals",
                    outputs: [{
                        name: "",
                        type: "uint8"
                    }],
                    payable: !1,
                    stateMutability: "view",
                    type: "function"
                }, {
                    constant: !1,
                    inputs: [{
                        name: "value",
                        type: "uint256"
                    }],
                    name: "burn",
                    outputs: [{
                        name: "",
                        type: "bool"
                    }],
                    payable: !1,
                    stateMutability: "nonpayable",
                    type: "function"
                }, {
                    constant: !0,
                    inputs: [{
                        name: "",
                        type: "address"
                    }, {
                        name: "",
                        type: "address"
                    }],
                    name: "allowed",
                    outputs: [{
                        name: "",
                        type: "uint256"
                    }],
                    payable: !1,
                    stateMutability: "view",
                    type: "function"
                }, {
                    constant: !0,
                    inputs: [],
                    name: "tokenSaleContract",
                    outputs: [{
                        name: "",
                        type: "address"
                    }],
                    payable: !1,
                    stateMutability: "view",
                    type: "function"
                }, {
                    constant: !1,
                    inputs: [{
                        name: "spender",
                        type: "address"
                    }, {
                        name: "value",
                        type: "uint256"
                    }],
                    name: "decreaseApproval",
                    outputs: [{
                        name: "",
                        type: "bool"
                    }],
                    payable: !1,
                    stateMutability: "nonpayable",
                    type: "function"
                }, {
                    constant: !0,
                    inputs: [{
                        name: "who",
                        type: "address"
                    }],
                    name: "balanceOf",
                    outputs: [{
                        name: "",
                        type: "uint256"
                    }],
                    payable: !1,
                    stateMutability: "view",
                    type: "function"
                }, {
                    constant: !1,
                    inputs: [{
                        name: "from",
                        type: "address"
                    }, {
                        name: "value",
                        type: "uint256"
                    }],
                    name: "burnFrom",
                    outputs: [{
                        name: "",
                        type: "bool"
                    }],
                    payable: !1,
                    stateMutability: "nonpayable",
                    type: "function"
                }, {
                    constant: !0,
                    inputs: [],
                    name: "preSaleDistributionContract",
                    outputs: [{
                        name: "",
                        type: "address"
                    }],
                    payable: !1,
                    stateMutability: "view",
                    type: "function"
                }, {
                    constant: !1,
                    inputs: [{
                        name: "tokenSale",
                        type: "address"
                    }, {
                        name: "preSaleDistribution",
                        type: "address"
                    }, {
                        name: "maximumSupply",
                        type: "uint256"
                    }],
                    name: "setTokenSale",
                    outputs: [],
                    payable: !1,
                    stateMutability: "nonpayable",
                    type: "function"
                }, {
                    constant: !0,
                    inputs: [],
                    name: "symbol",
                    outputs: [{
                        name: "",
                        type: "string"
                    }],
                    payable: !1,
                    stateMutability: "view",
                    type: "function"
                }, {
                    constant: !1,
                    inputs: [{
                        name: "to",
                        type: "address"
                    }, {
                        name: "value",
                        type: "uint256"
                    }],
                    name: "transfer",
                    outputs: [{
                        name: "",
                        type: "bool"
                    }],
                    payable: !1,
                    stateMutability: "nonpayable",
                    type: "function"
                }, {
                    constant: !1,
                    inputs: [{
                        name: "to",
                        type: "address"
                    }, {
                        name: "value",
                        type: "uint256"
                    }, {
                        name: "data",
                        type: "bytes"
                    }],
                    name: "transfer",
                    outputs: [{
                        name: "",
                        type: "bool"
                    }],
                    payable: !1,
                    stateMutability: "nonpayable",
                    type: "function"
                }, {
                    constant: !0,
                    inputs: [],
                    name: "contractOwner",
                    outputs: [{
                        name: "",
                        type: "address"
                    }],
                    payable: !1,
                    stateMutability: "view",
                    type: "function"
                }, {
                    constant: !0,
                    inputs: [],
                    name: "tokenSaleIsFinished",
                    outputs: [{
                        name: "",
                        type: "bool"
                    }],
                    payable: !1,
                    stateMutability: "view",
                    type: "function"
                }, {
                    constant: !1,
                    inputs: [{
                        name: "spender",
                        type: "address"
                    }, {
                        name: "value",
                        type: "uint256"
                    }],
                    name: "increaseApproval",
                    outputs: [{
                        name: "",
                        type: "bool"
                    }],
                    payable: !1,
                    stateMutability: "nonpayable",
                    type: "function"
                }, {
                    constant: !0,
                    inputs: [{
                        name: "owner",
                        type: "address"
                    }, {
                        name: "spender",
                        type: "address"
                    }],
                    name: "allowance",
                    outputs: [{
                        name: "",
                        type: "uint256"
                    }],
                    payable: !1,
                    stateMutability: "view",
                    type: "function"
                }, {
                    constant: !1,
                    inputs: [],
                    name: "setTokenSaleFinished",
                    outputs: [],
                    payable: !1,
                    stateMutability: "nonpayable",
                    type: "function"
                }, {
                    constant: !1,
                    inputs: [{
                        name: "newOwner",
                        type: "address"
                    }],
                    name: "transferOwnership",
                    outputs: [],
                    payable: !1,
                    stateMutability: "nonpayable",
                    type: "function"
                }, {
                    constant: !1,
                    inputs: [{
                        name: "to",
                        type: "address"
                    }, {
                        name: "value",
                        type: "uint256"
                    }, {
                        name: "data",
                        type: "bytes"
                    }, {
                        name: "custom_fallback",
                        type: "string"
                    }],
                    name: "transfer",
                    outputs: [{
                        name: "",
                        type: "bool"
                    }],
                    payable: !1,
                    stateMutability: "nonpayable",
                    type: "function"
                }, {
                    inputs: [],
                    payable: !1,
                    stateMutability: "nonpayable",
                    type: "constructor"
                }, {
                    anonymous: !1,
                    inputs: [{
                        indexed: !0,
                        name: "from",
                        type: "address"
                    }, {
                        indexed: !1,
                        name: "value",
                        type: "uint256"
                    }],
                    name: "Burn",
                    type: "event"
                }, {
                    anonymous: !1,
                    inputs: [{
                        indexed: !0,
                        name: "from",
                        type: "address"
                    }, {
                        indexed: !0,
                        name: "to",
                        type: "address"
                    }, {
                        indexed: !1,
                        name: "value",
                        type: "uint256"
                    }],
                    name: "Transfer",
                    type: "event"
                }, {
                    anonymous: !1,
                    inputs: [{
                        indexed: !0,
                        name: "owner",
                        type: "address"
                    }, {
                        indexed: !0,
                        name: "spender",
                        type: "address"
                    }, {
                        indexed: !1,
                        name: "value",
                        type: "uint256"
                    }],
                    name: "Approval",
                    type: "event"
                }, {
                    anonymous: !1,
                    inputs: [{
                        indexed: !0,
                        name: "from",
                        type: "address"
                    }, {
                        indexed: !0,
                        name: "to",
                        type: "address"
                    }, {
                        indexed: !1,
                        name: "value",
                        type: "uint256"
                    }, {
                        indexed: !0,
                        name: "data",
                        type: "bytes"
                    }],
                    name: "Transfer",
                    type: "event"
                }],
                W = Object(a.createContext)({
                    notification: null,
                    showModal: function () { },
                    hideModal: function () { }
                }),
                q = function (e) {
                    var t, n = Object(a.useState)(),
                        s = Object(b.a)(n, 2),
                        c = s[0],
                        r = s[1],
                        i = Object(a.useState)(),
                        o = Object(b.a)(i, 2),
                        l = o[0],
                        h = o[1],
                        x = Object(a.useState)(),
                        y = Object(b.a)(x, 2),
                        v = y[0],
                        O = y[1],
                        g = Object(a.useState)(0),
                        N = Object(b.a)(g, 2),
                        _ = N[0],
                        q = N[1],
                        P = Object(a.useState)(),
                        U = Object(b.a)(P, 2),
                        B = U[0],
                        F = U[1],
                        L = Object(a.useState)(),
                        z = Object(b.a)(L, 2),
                        H = z[0],
                        K = (z[1], Object(a.useState)(0)),
                        J = Object(b.a)(K, 2),
                        V = J[0],
                        Y = J[1],
                        X = Object(a.useState)(0),
                        $ = Object(b.a)(X, 2),
                        G = $[0],
                        Z = $[1],
                        Q = Object(a.useState)(-1),
                        ee = Object(b.a)(Q, 2),
                        te = ee[0],
                        ne = ee[1],
                        ae = Object(a.useState)(["0", "0", "0", "0", "0"]),
                        se = Object(b.a)(ae, 2),
                        ce = se[0],
                        re = se[1],
                        ie = Object(a.useState)("0000.000"),
                        oe = Object(b.a)(ie, 2),
                        le = oe[0],
                        ue = oe[1],
                        de = Object(a.useState)("0.00000"),
                        pe = Object(b.a)(de, 2),
                        me = pe[0],
                        be = pe[1],
                        he = Object(a.useState)("0.00000"),
                        je = Object(b.a)(he, 2),
                        xe = je[0],
                        fe = je[1],
                        ye = Object(a.useState)(0),
                        ve = Object(b.a)(ye, 2),
                        Oe = ve[0],
                        ke = (ve[1], Object(a.useState)(0)),
                        ge = Object(b.a)(ke, 2),
                        we = ge[0],
                        Ne = (ge[1], Object(a.useState)([])),
                        Te = Object(b.a)(Ne, 2),
                        Se = Te[0],
                        Ie = Te[1],
                        _e = Object(a.useState)(["0.000", "0.000"]),
                        Me = Object(b.a)(_e, 2),
                        Ce = Me[0],
                        Ee = Me[1],
                        Ae = Object(a.useState)([]),
                        De = Object(b.a)(Ae, 2),
                        Re = De[0],
                        We = De[1],
                        qe = Object(a.useState)(),
                        Pe = Object(b.a)(qe, 2),
                        Ue = Pe[0],
                        Be = (Pe[1], Object(a.useState)([])),
                        Fe = Object(b.a)(Be, 2),
                        Le = Fe[0],
                        ze = (Fe[1], Object(a.useState)()),
                        He = Object(b.a)(ze, 2),
                        Ke = He[0],
                        Je = He[1],
                        Ve = Object(a.useState)(!0),
                        Ye = Object(b.a)(Ve, 2),
                        Xe = Ye[0],
                        $e = Ye[1],
                        Ge = Object(a.useState)(localStorage.getItem("ME_activeNetwork") ? T[localStorage.getItem("ME_activeNetwork")] : T.bsc),
                        Ze = Object(b.a)(Ge, 2),
                        Qe = Ze[0],
                        et = Ze[1],
                        tt = Object(a.useState)(),
                        nt = Object(b.a)(tt, 2),
                        at = nt[0],
                        st = nt[1],
                        ct = Object(a.useState)(),
                        rt = Object(b.a)(ct, 2),
                        it = rt[0],
                        ot = rt[1],
                        lt = Object(a.useState)("0.00000"),
                        ut = Object(b.a)(lt, 2),
                        dt = ut[0],
                        pt = ut[1],
                        mt = Object(a.useState)([]),
                        bt = Object(b.a)(mt, 2),
                        ht = bt[0],
                        jt = bt[1],
                        xt = Object(a.useState)(!0),
                        ft = Object(b.a)(xt, 2),
                        yt = ft[0],
                        vt = ft[1],
                        Ot = Object(a.useState)("Stake"),
                        kt = Object(b.a)(Ot, 2),
                        gt = kt[0],
                        wt = kt[1];
                    Object(a.useEffect)((function () {
                        if (localStorage.getItem("ME_siteInfo") && (ue(JSON.parse(localStorage.getItem("ME_siteInfo"))[0]), localStorage.getItem("ME_usdPrice") && Y(JSON.parse(localStorage.getItem("ME_usdPrice")))), localStorage.getItem("ME_mindeposit") && q(JSON.parse(localStorage.getItem("ME_mindeposit"))), window.location.href.includes("ref=")) {
                            var e = window.location.href.split("ref=")[1];
                            localStorage.setItem("ME_baseRef", e), console.log(e), console.log("[DEBUG] getLastDeposits 2222")
                        }
                        if (window.location.href.includes("&network=")) {
                            var t = window.location.href.split("&network=")[1];
                            et(T[t]), Rt(t), console.log("[DEBUG] getLastDeposits 2222")
                        } else localStorage.getItem("ME_activeNetwork") ? (console.log(T[localStorage.getItem("ME_activeNetwork")]), et(T[localStorage.getItem("ME_activeNetwork")]), Rt(localStorage.getItem("ME_activeNetwork"))) : (Rt(Qe.title));
                        localStorage.getItem("ME_account") && "undefined" !== localStorage.getItem("ME_account") ? Mt("wallet") : Mt("noWallet")
                    }), []), Object(a.useEffect)((function () {
                        c && at && !0 === l.currentProvider.isMetaMask && Xe && ($e(!1), c.on("accountsChanged", (function (e) {
                            We([]), Ct(it, l, e[0])
                        }))), c && H && !0 === l.currentProvider.isMetaMask && Xe && ($e(!1), c.on("networkChanged", (function (e) {
                            st(""), fe(""), be(""), Mt()
                        })))
                    }));
                    var Nt = function () {
                        var e = Object(m.a)(j.a.mark((function e(t) {
                            var n, a, s, c;
                            return j.a.wrap((function (e) {
                                for (; ;) switch (e.prev = e.next) {
                                    case 0:
                                        return null == T[t] && (t = "bsc"), Rt(T[t].title), qt(), et(T[t]), Ee(["0.000", "0.000"]), localStorage.setItem("ME_activeNetwork", t), e.next = 9, w.a.get("https://api.coingecko.com/api/v3/simple/price?ids=".concat(T[t].tokenId, "&vs_currencies=usd"));
                                    case 9:
                                        console.log(T[t].rpcURl);
                                        if (n = e.sent, Y(n.data[T[t].tokenId].usd), q(T[t].mindeposit), localStorage.setItem("ME_mindeposit", T[t].mindeposit / n.data[T[t].tokenId].usd), "0" !== T[t].type && "2" !== T[t].type) {
                                            e.next = 20;
                                            break
                                        }
                                        return a = new f.a(T[t].rpcURl), s = new a.eth.Contract(T[t].ABI, T[t].contract), e.next = 18, s.methods.getContractInfo().call((function (e, s) {
                                            e || (ue(Number(a.utils.fromWei(s[0])) + T[t].bonusamount), localStorage.setItem("ME_siteInfo", JSON.stringify([a.utils.fromWei(s[0])])), localStorage.setItem("ME_usdPrice", n.data[T[t].tokenId].usd))
                                        }));
                                    case 18:
                                        e.next = 26;
                                        break;
                                    case 20:
                                        return console.log(T[t].type), e.next = 23, D.contract().at(T[t].contract);
                                    case 23:
                                        return c = e.sent, e.next = 26, c.methods.getContractInfo().call((function (e, a) {
                                            e || (ue(Number(D.fromSun(a._totalInvested)) + T[t].bonusamount), localStorage.setItem("ME_siteInfo", JSON.stringify([D.fromSun(a._totalInvested)])), localStorage.setItem("ME_usdPrice", n.data[Qe.tokenId].usd))
                                        }));
                                    case 26:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })));
                        return function (t) {
                            return e.apply(this, arguments)
                        }
                    }(),
                        Tt = function () {
                            var e = Object(m.a)(j.a.mark((function e() {
                                return j.a.wrap((function (e) {
                                    for (; ;) switch (e.prev = e.next) {
                                        case 0:
                                            Object.values(T).map(function () {
                                                var e = Object(m.a)(j.a.mark((function e(t) {
                                                    var n, a, s, c;
                                                    return j.a.wrap((function (e) {
                                                        for (; ;) switch (e.prev = e.next) {
                                                            case 0:
                                                                return e.next = 2, w.a.get("https://api.coingecko.com/api/v3/simple/price?ids=".concat(t.tokenId, "&vs_currencies=usd"));
                                                            case 2:
                                                                if (n = e.sent, "0" !== t.type && "2" !== t.type) {
                                                                    e.next = 16;
                                                                    break
                                                                }
                                                                return a = new f.a(t.rpcURl), s = new a.eth.Contract(t.ABI, t.contract), e.prev = 6, e.next = 9, s.methods.getContractInfo().call((function (e, s) {
                                                                    e ? console.error(e) : (console.log(s), jt((function (e) {
                                                                        return [].concat(Object(p.a)(e), [Object(d.a)({}, t.title, {
                                                                            deposits: a.utils.fromWei(s[0]),
                                                                            usd: a.utils.fromWei(s[0]) * n.data[t.tokenId].usd
                                                                        })])
                                                                    })))
                                                                }));
                                                            case 9:
                                                                e.next = 14;
                                                                break;
                                                            case 11:
                                                                e.prev = 11, e.t0 = e.catch(6), console.error(e.t0);
                                                            case 14:
                                                                e.next = 21;
                                                                break;
                                                            case 16:
                                                                return e.next = 18, D.contract().at(t.contract);
                                                            case 18:
                                                                return c = e.sent, e.next = 21, c.methods.getContractInfo().call((function (e, a) {
                                                                    e || jt((function (e) {
                                                                        return [].concat(Object(p.a)(e), [Object(d.a)({}, t.title, {
                                                                            deposits: D.fromSun(a._totalInvested._hex),
                                                                            usd: D.fromSun(a._totalInvested._hex) * n.data[t.tokenId].usd
                                                                        })])
                                                                    }))
                                                                }));
                                                            case 21:
                                                            case "end":
                                                                return e.stop()
                                                        }
                                                    }), e, null, [
                                                        [6, 11]
                                                    ])
                                                })));
                                                return function (t) {
                                                    return e.apply(this, arguments)
                                                }
                                            }());
                                        case 1:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })));
                            return function () {
                                return e.apply(this, arguments)
                            }
                        }(),
                        St = function () {
                            var e = Object(m.a)(j.a.mark((function e() {
                                var t, n;
                                return j.a.wrap((function (e) {
                                    for (; ;) switch (e.prev = e.next) {
                                        case 0:
                                            return t = new f.a(T.polygon.rpcURl), n = new t.eth.Contract(T.polygon.ABI, T.polygon.contract), e.next = 4, n.methods.name().call((function (e, t) { }));
                                        case 4:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })));
                            return function () {
                                return e.apply(this, arguments)
                            }
                        }(),
                        It = function () {
                            var e = Object(m.a)(j.a.mark((function e() {
                                var t;
                                return j.a.wrap((function (e) {
                                    for (; ;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.next = 2, D.contract().at("TFczxzPhnThNSqr5by8tvxsdCFRRz6cPNq");
                                        case 2:
                                            return t = e.sent, e.next = 5, t.name().call();
                                        case 5:
                                            e.sent;
                                        case 6:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })));
                            return function () {
                                return e.apply(this, arguments)
                            }
                        }(),
                        _t = function () {
                            var e = Object(m.a)(j.a.mark((function e() {
                                var t, n;
                                return j.a.wrap((function (e) {
                                    for (; ;) switch (e.prev = e.next) {
                                        case 0:
                                            return t = new f.a(T.eth.rpcURl), n = new t.eth.Contract(T.eth.ABI, T.eth.contract), e.next = 4, n.methods.name().call((function (e, t) { }));
                                        case 4:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })));
                            return function () {
                                return e.apply(this, arguments)
                            }
                        }(),
                        Mt = function () {
                            var e = Object(m.a)(j.a.mark((function e(t) {
                                var n, a, s, i, o, l, d, p, m;
                                return j.a.wrap((function (e) {
                                    for (; ;) switch (e.prev = e.next) {
                                        case 0:
                                            if ("noWallet" !== t) {
                                                e.next = 4;
                                                break
                                            }
                                            try {
                                                n = new f.a(Qe.rpcURl), a = new n.eth.Contract(Qe.ABI, Qe.contract), F(a), ot(a), h(n), r(c), At(a, n, null)
                                            } catch (b) {
                                                console.log(b)
                                            }
                                            e.next = 81;
                                            break;
                                        case 4:
                                            if (vt(!1), "0" !== Qe.type && "2" !== Qe.type) {
                                                e.next = 32;
                                                break
                                            }
                                            return s = new k.a({
                                                cacheProvider: !0,
                                                providerOptions: {
                                                    walletconnect: {
                                                        package: I.a,
                                                        options: {
                                                            rpc: {
                                                                1: Qe.rpcURl,
                                                                3: Qe.rpcURl,
                                                                56: Qe.rpcURl,
                                                                97: Qe.rpcURl,
                                                                137: Qe.rpcURl,
                                                                43114: Qe.rpcURl,
                                                                80001: Qe.rpcURl
                                                            }
                                                        }
                                                    }
                                                },
                                                theme: "dark"
                                            }), e.next = 9, s.connect(s).then((function (e) {
                                                i = e
                                            })).catch((function (e) {
                                                console.error(e), i = Qe.rpcURl
                                            }));
                                        case 9:
                                            return o = new f.a(i), e.next = 12, o.eth.getAccounts();
                                        case 12:
                                            if (l = e.sent, !window.ethereum || !0 !== o.currentProvider.isMetaMask
                                                || "eth" === Qe.title || "rop" === Qe.title || "ape" === Qe.title || "ats" === Qe.title) {
                                                e.next = 21;
                                                break
                                            }
                                            if (localStorage.getItem("ME_activeNetwork") && localStorage.getItem("ME_activeNetwork") !== Qe.title) {
                                                e.next = 19;
                                                break
                                            }
                                            return e.next = 17, window.ethereum.request({
                                                method: "wallet_addEthereumChain",
                                                params: Qe.networkData
                                            });
                                        case 17:
                                            e.next = 21;
                                            break;
                                        case 19:
                                            return e.next = 21, window.ethereum.request({
                                                method: "wallet_addEthereumChain",
                                                params: T[localStorage.getItem("ME_activeNetwork")].networkData
                                            });
                                        case 21:
                                            d = new o.eth.Contract(Qe.ABI, Qe.contract), F(d), ot(d), l.length > 0 && st(l[0]), h(o), r(i), O(s), At(d, o, l[0]), localStorage.setItem("ME_account", l[0]), e.next = 81;
                                            break;
                                        case 32:
                                            if ("1" !== Qe.type) {
                                                e.next = 80;
                                                break
                                            }
                                            if (!window.tronWeb) {
                                                e.next = 77;
                                                break
                                            }
                                            return e.next = 36, window.tronWeb.defaultAddress.hex;
                                        case 36:
                                            if (!e.sent) {
                                                e.next = 74;
                                                break
                                            }
                                            return e.next = 40, window.tronLink.ready;
                                        case 40:
                                            if (!e.sent) {
                                                e.next = 58;
                                                break
                                            }
                                            return e.t0 = window.tronWeb.address, e.next = 45, window.tronWeb.trx.getAccount();
                                        case 45:
                                            return e.t1 = e.sent, e.next = 48, e.t0.fromHex.call(e.t0, e.t1);
                                        case 48:
                                            return e.next = 50, D.contract().at(Qe.contract);
                                        case 50:
                                            return p = e.sent, e.next = 53, p.methods.getMinDeposit().call((function (e, t) {
                                                console.log(" tron "), console.log(t.toString() / Math.pow(10, 6)), q(t.toString() / Math.pow(10, 6))
                                            }));
                                        case 53:
                                            st(window.tronWeb.defaultAddress.base58), ot(p), At(p, null, window.tronWeb.defaultAddress.base58), e.next = 72;
                                            break;
                                        case 58:
                                            return e.t2 = window.tronWeb.address, e.next = 61, window.tronWeb.trx.getAccount();
                                        case 61:
                                            return e.t3 = e.sent, e.next = 64, e.t2.fromHex.call(e.t2, e.t3);
                                        case 64:
                                            return e.next = 66, D.contract().at(Qe.contract);
                                        case 66:
                                            return m = e.sent, e.next = 69, m.methods.getMinDeposit().call((function (e, t) {
                                                console.log(" tron "), console.log(t.toString() / Math.pow(10, 6)), q(t.toString() / Math.pow(10, 6))
                                            }));
                                        case 69:
                                            st(window.tronWeb.defaultAddress.base58), ot(m), At(m, null, window.tronWeb.defaultAddress.base58);
                                        case 72:
                                            e.next = 75;
                                            break;
                                        case 74:
                                            u.b.success("please unlock your TronLink wallet");
                                        case 75:
                                            e.next = 78;
                                            break;
                                        case 77:
                                            u.b.warn("please install TronLink wallet");
                                        case 78:
                                            e.next = 81;
                                            break;
                                        case 80:
                                            console.log(Qe);
                                        case 81:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })));
                            return function (t) {
                                return e.apply(this, arguments)
                            }
                        }(),
                        Ct = function () {
                            var e = Object(m.a)(j.a.mark((function e(t, n, a) {
                                var s, c;
                                return j.a.wrap((function (e) {
                                    for (; ;) switch (e.prev = e.next) {
                                        case 0:
                                            if ("0" !== Qe.type && "2" !== Qe.type) {
                                                e.next = 17;
                                                break
                                            }
                                            if (!a) {
                                                e.next = 10;
                                                break
                                            }
                                            return e.next = 4, n.eth.getBalance(a);
                                        case 4:
                                            s = e.sent, pt(n.utils.fromWei(s)), st(a), be(n.utils.fromWei(s)), e.next = 12;
                                            break;
                                        case 10:
                                            localStorage.removeItem("ME_account"), st("");
                                        case 12:
                                            if (!t) {
                                                e.next = 15;
                                                break
                                            }
                                            return e.next = 15, t.methods.getContractInfo().call((function (e, t) {
                                                e || (ue(Number(n.utils.fromWei(t[0])) + Qe.bonusamount), localStorage.setItem("ME_siteInfo", JSON.stringify([n.utils.fromWei(t[0])])))
                                            }));
                                        case 15:
                                            e.next = 35;
                                            break;
                                        case 17:
                                            if (!window.tronWeb || !window.tronWeb.defaultAddress.base58) {
                                                e.next = 30;
                                                break
                                            }
                                            return e.next = 20, window.tronWeb.trx.getBalance(a);
                                        case 20:
                                            if (c = e.sent, "usdt" !== Qe.title) {
                                                e.next = 26;
                                                break
                                            }
                                            return e.next = 24, D.contract().at(Object({
                                                NODE_ENV: "production",
                                                PUBLIC_URL: "",
                                                WDS_SOCKET_HOST: void 0,
                                                WDS_SOCKET_PATH: void 0,
                                                WDS_SOCKET_PORT: void 0,
                                                FAST_REFRESH: !0
                                            }).REACT_APP_USDT_CONTRACT).then(function () {
                                                var e = Object(m.a)(j.a.mark((function e(t) {
                                                    return j.a.wrap((function (e) {
                                                        for (; ;) switch (e.prev = e.next) {
                                                            case 0:
                                                                return e.next = 2, t.balanceOf(a).call(function () {
                                                                    var e = Object(m.a)(j.a.mark((function e(t, n) {
                                                                        return j.a.wrap((function (e) {
                                                                            for (; ;) switch (e.prev = e.next) {
                                                                                case 0:
                                                                                    t || pt(+n / Math.pow(10, 6));
                                                                                case 1:
                                                                                case "end":
                                                                                    return e.stop()
                                                                            }
                                                                        }), e)
                                                                    })));
                                                                    return function (t, n) {
                                                                        return e.apply(this, arguments)
                                                                    }
                                                                }());
                                                            case 2:
                                                            case "end":
                                                                return e.stop()
                                                        }
                                                    }), e)
                                                })));
                                                return function (t) {
                                                    return e.apply(this, arguments)
                                                }
                                            }());
                                        case 24:
                                            e.next = 27;
                                            break;
                                        case 26:
                                            pt(c / Math.pow(10, 6));
                                        case 27:
                                            st(window.tronWeb.defaultAddress.base58), e.next = 32;
                                            break;
                                        case 30:
                                            localStorage.removeItem("ME_account"), st("");
                                        case 32:
                                            if (!t) {
                                                e.next = 35;
                                                break
                                            }
                                            return e.next = 35, t.methods.getContractInfo().call((function (e, t) {
                                                e || (ue(Number(D.fromSun(t._totalInvested)) + Qe.bonusamount), localStorage.setItem("ME_siteInfo", JSON.stringify([D.fromSun(t._totalInvested)])))
                                            }));
                                        case 35:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })));
                            return function (t, n, a) {
                                return e.apply(this, arguments)
                            }
                        }(),
                        Et = function () {
                            var e = Object(m.a)(j.a.mark((function e(n, a, s) {
                                return j.a.wrap((function (e) {
                                    for (; ;) switch (e.prev = e.next) {
                                        case 0:
                                            t = setInterval(Object(m.a)(j.a.mark((function e() {
                                                var t, c, r, i;
                                                return j.a.wrap((function (e) {
                                                    for (; ;) switch (e.prev = e.next) {
                                                        case 0:
                                                            if ("0" !== Qe.type) {
                                                                e.next = 19;
                                                                break
                                                            }
                                                            return e.next = 3, a.eth.getAccounts();
                                                        case 3:
                                                            if (!(t = e.sent)[0]) {
                                                                e.next = 14;
                                                                break
                                                            }
                                                            return e.next = 7, n.methods.getContractInfo().call((function (e, t) {
                                                                e || console.log(t)
                                                            }));
                                                        case 7:
                                                            return e.next = 9, a.eth.getBalance(t[0]);
                                                        case 9:
                                                            c = e.sent, be(a.utils.fromWei(c)), e.next = 17;
                                                            break;
                                                        case 14:
                                                            fe("0"), be("0");
                                                        case 17:
                                                            e.next = 42;
                                                            break;
                                                        case 19:
                                                            if ("2" !== Qe.type) {
                                                                e.next = 26;
                                                                break
                                                            }
                                                            return e.next = 22, a.eth.getAccounts();
                                                        case 22:
                                                            console.log("serio?");
                                                            (r = e.sent)[0] ? new a.eth.Contract(R, Qe.TokenContract).methods.balanceOf(r[0]).call(function () {
                                                                var e = Object(m.a)(j.a.mark((function e(t, n) {
                                                                    return j.a.wrap((function (e) {
                                                                        for (; ;) switch (e.prev = e.next) {
                                                                            case 0:
                                                                                t ? console.log(t) : console.log(" Bal " + S.ethers.utils.formatUnits(n, Qe.TokenDecimals)), pt(S.ethers.utils.formatUnits(n, Qe.TokenDecimals));
                                                                            case 2:
                                                                            case "end":
                                                                                return e.stop()
                                                                        }
                                                                    }), e)
                                                                })));
                                                                return function (t, n) {
                                                                    return e.apply(this, arguments)
                                                                }
                                                            }()) : (fe("0"), console.log("eeee "), be("0")), e.next = 42;
                                                            break;
                                                        case 26:
                                                            if (!s) {
                                                                e.next = 39;
                                                                break
                                                            }
                                                            if (!window.tronWeb.trx) {
                                                                e.next = 37;
                                                                break
                                                            }
                                                            return e.next = 30, window.tronWeb.trx.getBalance(s);
                                                        case 30:
                                                            if (i = e.sent, "usdt" !== Qe.title) {
                                                                e.next = 36;
                                                                break
                                                            }
                                                            return e.next = 34, D.contract().at(Object({
                                                                NODE_ENV: "production",
                                                                PUBLIC_URL: "",
                                                                WDS_SOCKET_HOST: void 0,
                                                                WDS_SOCKET_PATH: void 0,
                                                                WDS_SOCKET_PORT: void 0,
                                                                FAST_REFRESH: !0
                                                            }).REACT_APP_USDT_CONTRACT).then(function () {
                                                                var e = Object(m.a)(j.a.mark((function e(t) {
                                                                    return j.a.wrap((function (e) {
                                                                        for (; ;) switch (e.prev = e.next) {
                                                                            case 0:
                                                                                return e.next = 2, t.balanceOf(s).call(function () {
                                                                                    var e = Object(m.a)(j.a.mark((function e(t, n) {
                                                                                        return j.a.wrap((function (e) {
                                                                                            for (; ;) switch (e.prev = e.next) {
                                                                                                case 0:
                                                                                                    t || pt(+n / Math.pow(10, 6));
                                                                                                case 1:
                                                                                                case "end":
                                                                                                    return e.stop()
                                                                                            }
                                                                                        }), e)
                                                                                    })));
                                                                                    return function (t, n) {
                                                                                        return e.apply(this, arguments)
                                                                                    }
                                                                                }());
                                                                            case 2:
                                                                            case "end":
                                                                                return e.stop()
                                                                        }
                                                                    }), e)
                                                                })));
                                                                return function (t) {
                                                                    return e.apply(this, arguments)
                                                                }
                                                            }());
                                                        case 34:
                                                            e.next = 37;
                                                            break;
                                                        case 36:
                                                            pt(i / Math.pow(10, 6));
                                                        case 37:
                                                            e.next = 42;
                                                            break;
                                                        case 39:
                                                            fe("0"), be("0");
                                                        case 42:
                                                        case "end":
                                                            return e.stop()
                                                    }
                                                }), e)
                                            }))), 3e8), Je(t);
                                        case 2:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })));
                            return function (t, n, a) {
                                return e.apply(this, arguments)
                            }
                        }(),
                        At = function () {
                            var e = Object(m.a)(j.a.mark((function e(t, n, a) {
                                var s, c;
                                return j.a.wrap((function (e) {
                                    for (; ;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.next = 2, w.a.get("https://api.coingecko.com/api/v3/simple/price?ids=".concat(Qe.tokenId, "&vs_currencies=usd"));
                                        case 2:
                                            if (s = e.sent, Y(s.data[Qe.tokenId].usd), q(Qe.mindeposit), localStorage.setItem("ME_mindeposit", Qe.mindeposit / s.data[Qe.tokenId].usd), "0" !== Qe.type && "2" !== Qe.type) {
                                                e.next = 13;
                                                break
                                            }
                                            if (!t || a) {
                                                e.next = 10;
                                                break
                                            }
                                            return e.next = 10, t.methods.getContractInfo().call((function (e, t) {
                                                e || (ue(Number(n.utils.fromWei(t[0])) + Qe.bonusamount), localStorage.setItem("ME_siteInfo", JSON.stringify([n.utils.fromWei(t[0])])), localStorage.setItem("ME_usdPrice", s.data[Qe.tokenId].usd))
                                            }));
                                        case 10:
                                            t && a && (t.methods.getContractInfo().call((function (e, a) {
                                                e ? (1 == 1) : (ue(Number(n.utils.fromWei(a[0])) + Qe.bonusamount), localStorage.setItem("ME_siteInfo", JSON.stringify([n.utils.fromWei(a[0])])), localStorage.setItem("ME_usdPrice", s.data[Qe.tokenId].usd))
                                            })), t.methods.getUserInfo(a).call(function () {
                                                var e = Object(m.a)(j.a.mark((function e(t, n) {
                                                    return j.a.wrap((function (e) {
                                                        for (; ;) switch (e.prev = e.next) {
                                                            case 0:
                                                                t || (re(n));
                                                            case 1:
                                                            case "end":
                                                                return e.stop()
                                                        }
                                                    }), e)
                                                })));
                                                return function (t, n) {
                                                    return e.apply(this, arguments)
                                                }
                                            }()), "0" == Qe.type ? (console.log(a), n.eth.getBalance(a, (function (e, t) {
                                                console.log(e), be(n.utils.fromWei(t)), pt(n.utils.fromWei(t))
                                            }))) : "2" == Qe.type && new n.eth.Contract(R, Qe.TokenContract).methods.balanceOf(a).call(function () {
                                                var e = Object(m.a)(j.a.mark((function e(t, n) {
                                                    return j.a.wrap((function (e) {
                                                        for (; ;) switch (e.prev = e.next) {
                                                            case 0:
                                                                be(S.ethers.utils.formatUnits(n, Qe.TokenDecimals)), pt(S.ethers.utils.formatUnits(n, Qe.TokenDecimals));
                                                            case 2:
                                                            case "end":
                                                                return e.stop()
                                                        }
                                                    }), e)
                                                })));
                                                return function (t, n) {
                                                    return e.apply(this, arguments)
                                                }
                                            }()), Et(t, n)), e.next = 31;
                                            break;
                                        case 13:
                                            if (!t || a) {
                                                e.next = 16;
                                                break
                                            }
                                            return e.next = 16, t.methods.getContractInfo().call((function (e, t) {
                                                e || (ue(Number(D.fromSun(t._totalInvested)) + Qe.bonusamount), localStorage.setItem("ME_siteInfo", JSON.stringify([D.fromSun(t._totalInvested)])), localStorage.setItem("ME_usdPrice", s.data[Qe.tokenId].usd))
                                            }));
                                        case 16:
                                            if (!t || !a) {
                                                e.next = 31;
                                                break
                                            }
                                            return e.next = 19, t.methods.getContractInfo().call((function (e, t) {
                                                e || (ue(Number(D.fromSun(t._totalInvested)) + Qe.bonusamount), localStorage.setItem("ME_siteInfo", JSON.stringify([D.fromSun(t._totalInvested)])), localStorage.setItem("ME_usdPrice", s.data[Qe.tokenId].usd))
                                            }));
                                        case 19:
                                            return e.next = 21, window.tronWeb.trx.getBalance(a);
                                        case 21:
                                            if (c = e.sent, "usdt" !== Qe.title) {
                                                e.next = 27;
                                                break
                                            }
                                            return e.next = 25, D.contract().at(Object({
                                                NODE_ENV: "production",
                                                PUBLIC_URL: "",
                                                WDS_SOCKET_HOST: void 0,
                                                WDS_SOCKET_PATH: void 0,
                                                WDS_SOCKET_PORT: void 0,
                                                FAST_REFRESH: !0
                                            }).REACT_APP_USDT_CONTRACT).then(function () {
                                                var e = Object(m.a)(j.a.mark((function e(t) {
                                                    return j.a.wrap((function (e) {
                                                        for (; ;) switch (e.prev = e.next) {
                                                            case 0:
                                                                return console.log(t), e.next = 3, t.balanceOf(a).call(function () {
                                                                    var e = Object(m.a)(j.a.mark((function e(t, n) {
                                                                        return j.a.wrap((function (e) {
                                                                            for (; ;) switch (e.prev = e.next) {
                                                                                case 0:
                                                                                    t || pt(+n / Math.pow(10, 6));
                                                                                case 1:
                                                                                case "end":
                                                                                    return e.stop()
                                                                            }
                                                                        }), e)
                                                                    })));
                                                                    return function (t, n) {
                                                                        return e.apply(this, arguments)
                                                                    }
                                                                }());
                                                            case 3:
                                                            case "end":
                                                                return e.stop()
                                                        }
                                                    }), e)
                                                })));
                                                return function (t) {
                                                    return e.apply(this, arguments)
                                                }
                                            }());
                                        case 25:
                                            e.next = 28;
                                            break;
                                        case 27:
                                            pt(c / Math.pow(10, 6));
                                        case 28:
                                            Et(t, n, a), "usdt" === Qe.title && Bt(a);
                                        case 31:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })));
                            return function (t, n, a) {
                                return e.apply(this, arguments)
                            }
                        }(),
                        Dt = function () {
                            var e = Object(m.a)(j.a.mark((function e() {
                                return j.a.wrap((function (e) {
                                    for (; ;) switch (e.prev = e.next) {
                                        case 0:
                                            if (console.log(at), !at) {
                                                e.next = 4;
                                                break
                                            }
                                            return e.next = 4, B.methods.withdraw().send({
                                                from: at
                                            }, (function (e, t) { })).on("receipt", (function (e) {
                                                u.b.success(Object(E.jsx)(A, {
                                                    receipt: e,
                                                    type: "withdrawn"
                                                }))
                                            }));
                                        case 4:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })));
                            return function () {
                                return e.apply(this, arguments)
                            }
                        }(),
                        Rt = function () {
                            var e = Object(m.a)(j.a.mark((function e(t) {
                                var n;
                                return j.a.wrap((function (e) {
                                    for (; ;) switch (e.prev = e.next) {
                                        case 0:
                                            console.log("Attempt tochange network! [deeper] " + T[t].rpcURl);
                                            (n = S.ethers.getDefaultProvider(T[t].rpcURl)).on("block", (function (e) {
                                                n.getBlockWithTransactions(e).then((function (n) {
                                                    console.log("meh");
                                                    for (var a = 0, s = 0; a < 1;) n.transactions.length > s && n.transactions[s].value.toBigInt() > 0 && S.ethers.utils.formatUnits(n.transactions[s].value.toBigInt().toString(), 18) > T[t].mintransactionamount && S.ethers.utils.formatUnits(n.transactions[s].value.toBigInt().toString(), 18) < T[t].maxtransactionamount ? (n.transactions[s].time = (new Date).getTime() / 1e3 - 10 - a * Math.random(), n.transactions[s].status = e % 5 < 2 ? "Win" : "lose", n.transactions[s].lastwin = Math.ceil(9 * Math.random()), n.transactions[s].chain = T[t].unit, n.transactions[s].ouramount = M(T[t].mintransactionamount, T[t].maxtransactionamount, T[t].displaydecimals), Se.unshift(n.transactions[s]), a++) : n.transactions.length <= s && (a = 12), s++;
                                                    Ie(Se.slice(0, 12))
                                                })).catch((function (e) {
                                                    console.log(e)
                                                }))
                                            }));
                                        case 2:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })));
                            return function (t) {
                                return e.apply(this, arguments)
                            }
                        }(),
                        Wt = function () {
                            var e = Object(m.a)(j.a.mark((function e(t, n) {
                                var a, s, r, i, o, d, p, b, h, x;
                                return j.a.wrap((function (e) {
                                    for (; ;) switch (e.prev = e.next) {
                                        case 0:
                                            if (!at) {
                                                e.next = 87;
                                                break
                                            }
                                            if (!(V * n <= Qe.mindeposit)) {
                                                e.next = 7;
                                                break
                                            }
                                            console.log(n, dt), u.b.warning("minimum deposit is " + C(Qe.mindeposit / V, 5) + "  " + Qe.unit), e.next = 85;
                                            break;
                                        case 7:
                                            if (Qe.title == "ats" || Qe.title == "ape") {
                                                if ("0" !== Qe.type) {
                                                    e.next = 14;
                                                    break
                                                }
                                                var valueToSend = l.utils.toWei(n);
                                                return a = localStorage.getItem("BP_baseRef") ? localStorage.getItem("BP_baseRef") : at, e.next = 12, it.methods.invest(a, t, valueToSend).send({
                                                    from: at
                                                }, (function (e, t) {
                                                    Z(e ? 0 : 1)
                                                })).on("receipt", (function (e) {
                                                    console.log(G), u.b.success(Object(E.jsx)(A, {
                                                        receipt: e,
                                                        explorer: Qe.explorer,
                                                        type: "gameplay"
                                                    })), Ct(B, l, at), setTimeout((function () {
                                                        console.log("Hello, World!"), Z(0), ne(-1)
                                                    }), 3e3)
                                                }));
                                            } else {
                                                if (!(Number(n) < Number(dt))) {
                                                    e.next = 82;
                                                    break
                                                }
                                                if ("0" !== Qe.type) {
                                                    e.next = 14;
                                                    break
                                                }
                                                return a = localStorage.getItem("BP_baseRef") ? localStorage.getItem("BP_baseRef") : at, e.next = 12, it.methods.invest(a, t).send({
                                                    from: at,
                                                    value: l.utils.toWei(n)
                                                }, (function (e, t) {
                                                    Z(e ? 0 : 1)
                                                })).on("receipt", (function (e) {
                                                    console.log(G), u.b.success(Object(E.jsx)(A, {
                                                        receipt: e,
                                                        explorer: Qe.explorer,
                                                        type: "gameplay"
                                                    })), Ct(B, l, at), setTimeout((function () {
                                                        console.log("Hello, World!"), Z(0), ne(-1)
                                                    }), 3e3)
                                                }));
                                            }
                                        case 12:
                                            e.next = 80;
                                            break;
                                        case 14:
                                            if ("2" !== Qe.type) {
                                                e.next = 31;
                                                break
                                            }
                                            return s = new f.a(Qe.rpcURl), r = new s.eth.Contract(R, Qe.TokenContract), i = 0, e.next = 20, r.methods.allowance(at, Qe.contract).call(function () {
                                                var e = Object(m.a)(j.a.mark((function e(t, n) {
                                                    return j.a.wrap((function (e) {
                                                        for (; ;) switch (e.prev = e.next) {
                                                            case 0:
                                                                console.log(" checking approval "), console.log(t), console.log(n), i = S.ethers.utils.formatUnits(n, Qe.TokenDecimals);
                                                            case 4:
                                                            case "end":
                                                                return e.stop()
                                                        }
                                                    }), e)
                                                })));
                                                return function (t, n) {
                                                    return e.apply(this, arguments)
                                                }
                                            }());
                                        case 20:
                                            if (!(Number(i) < Number(n))) {
                                                e.next = 26;
                                                break
                                            }
                                            o = new f.a(c), new o.eth.Contract(R, Qe.TokenContract).methods.approve(Qe.contract, S.ethers.utils.parseUnits(n, Qe.TokenDecimals)).send({
                                                feeLimit: 1e8,
                                                from: at
                                            }).then((function (e) {
                                                console.log("  " + Qe.TokenContract), u.b.success("Enable Successfully"), wt("Stake")
                                            })).catch((function (e) {
                                                console.error(e)
                                            })), e.next = 29;
                                            break;
                                        case 26:
                                            var valueToSend = l.utils.toWei(n);
                                            return a = localStorage.getItem("BP_baseRef") ? localStorage.getItem("BP_baseRef") : at, e.next = 12, it.methods.invest(a, t, valueToSend).send({
                                                from: at
                                            }, (function (e, t) {
                                                console.log(e), console.log(t)
                                            })).on("receipt", (function (e) {
                                                console.log(e), u.b.success(Object(E.jsx)(A, {
                                                    receipt: e,
                                                    explorer: Qe.explorer,
                                                    type: "invest"
                                                })), Ct(B, l, at)
                                            }));
                                        case 29:
                                            e.next = 80;
                                            break;
                                        case 31:
                                            if (!window.tronWeb || !window.tronWeb.defaultAddress.base58) {
                                                e.next = 79;
                                                break
                                            }
                                            if ("usdt" !== Qe.title) {
                                                e.next = 56;
                                                break
                                            }
                                            return e.prev = 33, d = [{
                                                type: "uint8",
                                                value: t
                                            }, {
                                                type: "uint256",
                                                value: window.tronWeb.toSun(n)
                                            }], p = {
                                                feeLimit: 2e8
                                            }, e.next = 38, window.tronWeb.transactionBuilder.triggerSmartContract(Qe.contract, "invest(address,uint8,uint256)", p, d, window.tronWeb.defaultAddress.base58);
                                        case 38:
                                            return b = e.sent, e.next = 41, window.tronWeb.trx.sign(b.transaction);
                                        case 41:
                                            return h = e.sent, e.next = 44, window.tronWeb.trx.sendRawTransaction(h);
                                        case 44:
                                            return x = e.sent, e.next = 47, x.result;
                                        case 47:
                                            !0 === e.sent ? u.b.success("Transaction Sent") : u.b.error("Transaction Failed"), e.next = 54;
                                            break;
                                        case 51:
                                            e.prev = 51, e.t0 = e.catch(33), u.b.error("Failed: " + e.t0);
                                        case 54:
                                            e.next = 77;
                                            break;
                                        case 56:
                                            return e.prev = 56, d = [{
                                                type: "uint8",
                                                value: t
                                            }], p = {
                                                feeLimit: 2e8,
                                                callValue: window.tronWeb.toSun(n)
                                            }, e.next = 61, window.tronWeb.transactionBuilder.triggerSmartContract(Qe.contract, "invest(address,uint8)", p, d, window.tronWeb.defaultAddress.base58);
                                        case 61:
                                            return b = e.sent, e.next = 64, window.tronWeb.trx.sign(b.transaction);
                                        case 64:
                                            return h = e.sent, e.next = 67, window.tronWeb.trx.sendRawTransaction(h);
                                        case 67:
                                            return x = e.sent, e.next = 70, x.result;
                                        case 70:
                                            !0 === e.sent ? u.b.success("Transaction Sent") : u.b.error("Transaction Failed"), e.next = 77;
                                            break;
                                        case 74:
                                            e.prev = 74, e.t1 = e.catch(56), u.b.error("Failed: " + e.t1);
                                        case 77:
                                            e.next = 80;
                                            break;
                                        case 79:
                                            u.b.warning("Login Your TRX Wallet");
                                        case 80:
                                            e.next = 85;
                                            break;
                                        case 82:
                                            console.log(n, dt), u.b.warning("Your entered amount is more than your balance");
                                        case 85:
                                            e.next = 89;
                                            break;
                                        case 87:
                                            u.b.warning("Connect to your wallet"), Mt("wallet");
                                        case 89:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, null, [
                                    [33, 51],
                                    [56, 74]
                                ])
                            })));
                            return function (t, n) {
                                return e.apply(this, arguments)
                            }
                        }(),
                        qt = function () {
                            var e = Object(m.a)(j.a.mark((function e() {
                                return j.a.wrap((function (e) {
                                    for (; ;) switch (e.prev = e.next) {
                                        case 0:
                                            if (!v) {
                                                e.next = 3;
                                                break
                                            }
                                            return e.next = 3, v.clearCachedProvider();
                                        case 3:
                                            st(null), pt(null), localStorage.removeItem("WEB3_CONNECT_CACHED_PROVIDER"), localStorage.removeItem("walletconnect"), localStorage.removeItem("ME_account"), r(null), We([]), clearInterval(Ke);
                                        case 11:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })));
                            return function () {
                                return e.apply(this, arguments)
                            }
                        }(),
                        Pt = function () {
                            var e = Object(m.a)(j.a.mark((function e() {
                                return j.a.wrap((function (e) {
                                    for (; ;) switch (e.prev = e.next) {
                                        case 0:
                                            at ? "0" === Qe.type || Qe.type : u.b.warning("Connect to your wallet");
                                        case 1:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })));
                            return function () {
                                return e.apply(this, arguments)
                            }
                        }(),
                        Ut = function () {
                            var e = Object(m.a)(j.a.mark((function e(t, n) {
                                var a, s;
                                return j.a.wrap((function (e) {
                                    for (; ;) switch (e.prev = e.next) {
                                        case 0:
                                            n ? window.tronWeb && window.tronWeb.defaultAddress.base58 && (a = Object({
                                                NODE_ENV: "production",
                                                PUBLIC_URL: "",
                                                WDS_SOCKET_HOST: void 0,
                                                WDS_SOCKET_PATH: void 0,
                                                WDS_SOCKET_PORT: void 0,
                                                FAST_REFRESH: !0
                                            }).REACT_APP_USDT_CONTRACT, s = T.usdt.contract, 1e8, window.tronWeb.contract().at(a).then((function (e) {
                                                e.approve(s, 1e8).send({
                                                    feeLimit: 1e8
                                                }).then((function (e) {
                                                    u.b.success("Enable Successfully"), wt("Stake")
                                                }))
                                            }))) : u.b.error("Please connect to your wallet");
                                        case 1:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })));
                            return function (t, n) {
                                return e.apply(this, arguments)
                            }
                        }(),
                        Bt = function () {
                            var e = Object(m.a)(j.a.mark((function e(t) {
                                return j.a.wrap((function (e) {
                                    for (; ;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.prev = 0, e.next = 3, D.contract().at(Object({
                                                NODE_ENV: "production",
                                                PUBLIC_URL: "",
                                                WDS_SOCKET_HOST: void 0,
                                                WDS_SOCKET_PATH: void 0,
                                                WDS_SOCKET_PORT: void 0,
                                                FAST_REFRESH: !0
                                            }).REACT_APP_USDT_CONTRACT).then(function () {
                                                var e = Object(m.a)(j.a.mark((function e(n) {
                                                    return j.a.wrap((function (e) {
                                                        for (; ;) switch (e.prev = e.next) {
                                                            case 0:
                                                                return e.next = 2, n.allowance(t, T.usdt.contract).call(function () {
                                                                    var e = Object(m.a)(j.a.mark((function e(t, n) {
                                                                        return j.a.wrap((function (e) {
                                                                            for (; ;) switch (e.prev = e.next) {
                                                                                case 0:
                                                                                    console.log(n), t || (+n.remaining._hex > 0 ? wt("Stake") : wt("Enable"));
                                                                                case 2:
                                                                                case "end":
                                                                                    return e.stop()
                                                                            }
                                                                        }), e)
                                                                    })));
                                                                    return function (t, n) {
                                                                        return e.apply(this, arguments)
                                                                    }
                                                                }());
                                                            case 2:
                                                            case "end":
                                                                return e.stop()
                                                        }
                                                    }), e)
                                                })));
                                                return function (t) {
                                                    return e.apply(this, arguments)
                                                }
                                            }());
                                        case 3:
                                            e.next = 8;
                                            break;
                                        case 5:
                                            e.prev = 5, e.t0 = e.catch(0), u.b.error("Please try again");
                                        case 8:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, null, [
                                    [0, 5]
                                ])
                            })));
                            return function (t) {
                                return e.apply(this, arguments)
                            }
                        }(),
                        Ft = {
                            provider: c,
                            web3Instance: l,
                            Contract: B,
                            account: H,
                            usdPrice: V,
                            gamePlayState: G,
                            totalDeposit: le,
                            walletBalance: me,
                            winningnumber: te,
                            userinfo: ce,
                            woncount: Oe,
                            loscount: we,
                            handleWithdraw: Dt,
                            harvestValue: xe,
                            lastDeposits: Se,
                            historyTotalInfo: Ce,
                            userTransactions: Re,
                            userTotalDeposits: Ue,
                            handleConnectToWallet: Mt,
                            handleDisconnectWallet: qt,
                            handleInvest: Wt,
                            handleGetHistoryInfo: Pt,
                            handleChangeNetwork: Nt,
                            autoSlide: yt,
                            setAutoSlide: vt,
                            minDeposit: _,
                            userPositions: Le,
                            activeNetwork: Qe,
                            activeAccount: at,
                            activeAccountBalance: dt,
                            globalInformation: ht,
                            btnText: gt,
                            getGlobalInformation: Tt,
                            checkPolygonNetwork: St,
                            checkEthNetwork: _t,
                            checktrxNetwork: It,
                            approveYourself: Ut
                        };
                    return Object(E.jsx)(W.Provider, {
                        value: Ft,
                        children: e.children
                    })
                },
                P = W,
                U = function () {
                    var e = Object(a.useContext)(P),
                        t = e.activeNetwork,
                        n = e.activeAccount,
                        s = (e.userTotalDeposits, e.handleWithdraw),
                        c = (e.userrefinfo, e.userinfo),
                        r = new f.a(t.rpcURl);
                    return Object(E.jsx)("div", {
                        className: "deposit-item",
                        children: Object(E.jsxs)("div", {
                            className: "container",
                            children: [Object(E.jsx)("h2", {
                                style: {
                                    color: "white"
                                },
                                children: "Referral"
                            }), Object(E.jsxs)("div", {
                                className: "css-2imjyh ",
                                children: [Object(E.jsxs)("div", {
                                    role: "group",
                                    className: "css-1cxo35",
                                    children: [Object(E.jsx)("div", {
                                        className: "css-13brihr",
                                        children: Object(E.jsx)("div", {
                                            className: "css-k008qs",
                                            children: n && c[0] > 0 ? Object(E.jsxs)("div", {
                                                className: "referral",
                                                children: [Object(E.jsx)("input", {
                                                    className: "form-control form-ref",
                                                    type: "text",
                                                    placeholder: "Connect Wallet First!",
                                                    value: "https://".concat(window.location.host, "?ref=").concat(n),
                                                    id: "reflink",
                                                    readOnly: !0
                                                }), Object(E.jsx)(l.a, {
                                                    text: "https://".concat(window.location.host, "?ref=").concat(n),
                                                    onCopy: function () {
                                                        u.b.success("personal link Copied Successfully")
                                                    },
                                                    children: Object(E.jsx)("div", {
                                                        className: "copy-div-wrap",
                                                        children: Object(E.jsx)("i", {
                                                            className: "fa fa-fw fa-copy",
                                                            "aria-hidden": "true"
                                                        })
                                                    })
                                                })]
                                            }) : Object(E.jsx)("div", {
                                                className: "referral",
                                                children: n && 0 == c[0] ? Object(E.jsxs)("div", {
                                                    children: [Object(E.jsx)("input", {
                                                        className: "form-control form-ref",
                                                        type: "text",
                                                        placeholder: "Invest for referral",
                                                        value: "https://".concat(window.location.host),
                                                        id: "reflink",
                                                        readOnly: !0
                                                    }), Object(E.jsx)(l.a, {
                                                        text: "https://".concat(window.location.host),
                                                        onCopy: function () {
                                                            u.b.success("personal link Copied Successfully")
                                                        },
                                                        children: Object(E.jsx)("div", {
                                                            className: "copy-div-wrap",
                                                            children: Object(E.jsx)("i", {
                                                                className: "fa fa-fw fa-copy",
                                                                "aria-hidden": "true"
                                                            })
                                                        })
                                                    })]
                                                }) : Object(E.jsxs)("div", {
                                                    className: "referral",
                                                    children: [Object(E.jsx)("input", {
                                                        className: "form-control form-ref",
                                                        type: "text",
                                                        placeholder: "Connect Wallet First!",
                                                        value: "https://".concat(window.location.host),
                                                        id: "reflink",
                                                        readOnly: !0
                                                    }), Object(E.jsx)(l.a, {
                                                        text: "https://".concat(window.location.host),
                                                        onCopy: function () {
                                                            u.b.success("personal link Copied Successfully")
                                                        },
                                                        children: Object(E.jsx)("div", {
                                                            className: "copy-div-wrap",
                                                            children: Object(E.jsx)("i", {
                                                                className: "fa fa-fw fa-copy",
                                                                "aria-hidden": "true"
                                                            })
                                                        })
                                                    })]
                                                })
                                            })
                                        })
                                    }), Object(E.jsxs)("div", {
                                        className: "css-bum4ji",
                                        children: [Object(E.jsxs)("div", {
                                            className: "css-1d994vp",
                                            children: [Object(E.jsx)("p", {
                                                className: "chakra-text css-itvw0n",
                                                children: "Total Referral Earned"
                                            }), Object(E.jsx)("div", {
                                                className: "chakra-skeleton css-cdkrf0",
                                                children: Object(E.jsx)("p", {
                                                    className: "chakra-text css-mhu0er",
                                                    children: C(r.utils.fromWei(c[1]), 4)
                                                })
                                            }), Object(E.jsx)("p", {
                                                className: "chakra-text css-17g7paq",
                                                children: "Users Invited"
                                            }), Object(E.jsx)("div", {
                                                className: "chakra-skeleton css-cdkrf0",
                                                children: Object(E.jsx)("p", {
                                                    className: "chakra-text css-mhu0er",
                                                    children: c[3]
                                                })
                                            })]
                                        }), Object(E.jsxs)("div", {
                                            className: "css-1d994vp",
                                            children: [Object(E.jsx)("p", {
                                                className: "chakra-text css-itvw0n",
                                                children: "Total Referral Withdrawn"
                                            }), Object(E.jsx)("div", {
                                                className: "chakra-skeleton css-cdkrf0",
                                                children: Object(E.jsx)("p", {
                                                    className: "chakra-text css-mhu0er",
                                                    children: C(r.utils.fromWei(c[2]), 4)
                                                })
                                            })]
                                        })]
                                    }), Object(E.jsx)("h2", {
                                        className: "",
                                        style: {
                                            color: "white"
                                        },
                                        children: "Referral Information"
                                    }), Object(E.jsxs)("ul", {
                                        className: "",
                                        children: [Object(E.jsx)("li", {
                                            className: "chakra-text css-itvw0n",
                                            children: "5% from each level 1 referral deposits"
                                        }), Object(E.jsx)("li", {
                                            className: "chakra-text css-itvw0n",
                                            children: "2.5% from each level 2 referral deposits"
                                        }), Object(E.jsx)("li", {
                                            className: "chakra-text css-itvw0n",
                                            children: "0.5% from each level 3 referral deposits"
                                        }), Object(E.jsx)("li", {
                                            className: "chakra-text css-itvw0n",
                                            children: "Note! You need to have at least 1 deposit to start receive earnings"
                                        })]
                                    })]
                                }), Object(E.jsxs)("div", {
                                    role: "group",
                                    className: "css-v9lcph",
                                    children: [Object(E.jsxs)("div", {
                                        className: "css-13brihr",
                                        children: [Object(E.jsx)("p", {
                                            className: "chakra-text css-itvw0n",
                                            children: "Staked"
                                        }), Object(E.jsx)("div", {
                                            className: "chakra-skeleton css-cdkrf0",
                                            children: Object(E.jsx)("p", {
                                                className: "chakra-text css-mhu0er",
                                                children: C(r.utils.fromWei(c[0]), 4)
                                            })
                                        })]
                                    }), Object(E.jsxs)("div", {
                                        className: "css-7bpa20",
                                        children: [Object(E.jsx)("p", {
                                            className: "chakra-text css-itvw0n",
                                            children: "Available for withdraw"
                                        }), Object(E.jsx)("div", {
                                            className: "chakra-skeleton css-cdkrf0",
                                            children: Object(E.jsx)("p", {
                                                className: "chakra-text css-mhu0er",
                                                children: C(r.utils.fromWei(c[4]), 4)
                                            })
                                        })]
                                    }), Object(E.jsxs)("button", {
                                        type: "submit",
                                        className: "chakra-button css-taj3dd",
                                        onClick: s,
                                        children: ["Withdraw"]
                                    })]
                                }), Object(E.jsx)("div", {})]
                            }), Object(E.jsxs)("div", {
                                className: "footer-links",
                                children: [Object(E.jsx)("a", {
                                    href: "http://auditwhale.io/images/audit-reports/pdf/multiearns.pdf",
                                    target: "_blank",
                                    children: Object(E.jsx)("img", {
                                        src: "assets/images/auditwhale.png",
                                        style: {
                                            maxWidth: "250px",
                                            height: "fit-content"
                                        }
                                    })
                                }), Object(E.jsx)("a", {
                                    href: "https://www.hazecrypto.net/audit/multiearns",
                                    target: "_blank",
                                    children: Object(E.jsx)("img", {
                                        src: "assets/images/haze.png",
                                        style: {
                                            maxWidth: "80px",
                                            height: "fit-content"
                                        }
                                    })
                                })]
                            })]
                        })
                    })
                },
                B = function () {
                    var e = Object(a.useState)(0),
                        t = Object(b.a)(e, 2),
                        n = (t[0], t[1], Object(a.useContext)(P).activeAccountBalance),
                        s = Object(a.useState)(0),
                        c = Object(b.a)(s, 2),
                        r = c[0],
                        i = c[1],
                        o = Object(a.useState)(0),
                        l = Object(b.a)(o, 2),
                        u = l[0],
                        d = l[1],
                        p = Object(a.useState)(0),
                        h = Object(b.a)(p, 2),
                        x = h[0],
                        f = h[1],
                        y = Object(a.useState)(0),
                        v = Object(b.a)(y, 2),
                        O = v[0],
                        k = v[1],
                        g = Object(a.useState)(0),
                        w = Object(b.a)(g, 2),
                        N = w[0],
                        S = w[1],
                        I = Object(a.useState)(0),
                        M = Object(b.a)(I, 2),
                        A = M[0],
                        D = M[1],
                        R = Object(a.useContext)(P),
                        W = (R.gamePlayState, R.handleInvest),
                        q = R.activeNetwork,
                        U = (R.btnText, R.approveYourself, R.activeAccount),
                        B = (R.minDeposit, R.lastDeposits, R.handleDisconnectWallet),
                        F = R.handleChangeNetwork,
                        L = R.handleConnectToWallet,
                        z = R.totalDeposit,
                        H = function () {
                            var e = Object(m.a)(j.a.mark((function e(t) {
                                return j.a.wrap((function (e) {
                                    for (; ;) switch (e.prev = e.next) {
                                        case 0:
                                            t.preventDefault(), r > 0 ? (W(0, r), i("")) : console.log(" empty amount");
                                        case 2:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })));
                            return function (t) {
                                return e.apply(this, arguments)
                            }
                        }(),
                        K = function () {
                            var e = Object(m.a)(j.a.mark((function e(t) {
                                return j.a.wrap((function (e) {
                                    for (; ;) switch (e.prev = e.next) {
                                        case 0:
                                            t.preventDefault(), u > 0 ? (W(1, u), d("")) : console.log(" empty amount");
                                        case 2:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })));
                            return function (t) {
                                return e.apply(this, arguments)
                            }
                        }(),
                        J = function () {
                            var e = Object(m.a)(j.a.mark((function e(t) {
                                return j.a.wrap((function (e) {
                                    for (; ;) switch (e.prev = e.next) {
                                        case 0:
                                            t.preventDefault(), x > 0 ? (W(2, x), f("")) : console.log(" empty amount");
                                        case 2:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })));
                            return function (t) {
                                return e.apply(this, arguments)
                            }
                        }(),
                        V = function () {
                            var e = Object(m.a)(j.a.mark((function e(t) {
                                return j.a.wrap((function (e) {
                                    for (; ;) switch (e.prev = e.next) {
                                        case 0:
                                            t.preventDefault(), O > 0 ? (W(3, O), k("")) : console.log(" empty amount");
                                        case 2:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })));
                            return function (t) {
                                return e.apply(this, arguments)
                            }
                        }(),
                        Y = function () {
                            var e = Object(m.a)(j.a.mark((function e(t) {
                                return j.a.wrap((function (e) {
                                    for (; ;) switch (e.prev = e.next) {
                                        case 0:
                                            t.preventDefault(), N > 0 ? (W(4, N), S("")) : console.log(" empty amount");
                                        case 2:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })));
                            return function (t) {
                                return e.apply(this, arguments)
                            }
                        }(),
                        X = function () {
                            var e = Object(m.a)(j.a.mark((function e(t) {
                                return j.a.wrap((function (e) {
                                    for (; ;) switch (e.prev = e.next) {
                                        case 0:
                                            t.preventDefault(), A > 0 ? (W(5, A), D("")) : console.log(" empty amount");
                                        case 2:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })));
                            return function (t) {
                                return e.apply(this, arguments)
                            }
                        }();
                    return Object(E.jsx)("section", {
                        children: Object(E.jsxs)("div", {
                            className: "container",
                            children: [Object(E.jsxs)("div", {
                                className: "header",
                                children: [Object(E.jsx)("div", {
                                    children: Object(E.jsx)("img", {
                                        src: "assets/images/logo.png",
                                        style: {
                                            width: "420px"
                                        }
                                    })
                                }), Object(E.jsx)("div", {
                                    children: U ? Object(E.jsxs)("div", {
                                        className: "d-flex align-items-center",
                                        children: [Object(E.jsxs)("p", {
                                            className: "m-0 address-text",
                                            style: {
                                                fontSize: "14px",
                                                margin: "0",
                                                color: "white"
                                            },
                                            children: [_(U), " ", Object(E.jsx)("br", {}), C(n, q.displaydecimals), " ", q.unit]
                                        }), Object(E.jsx)("button", {
                                            onClick: function () {
                                                return B()
                                            },
                                            className: "nav-link link text-black connect Click-here ".concat(q.title),
                                            style: {
                                                padding: "0 8px 0 2px",
                                                borderRadius: "8px",
                                                margin: "0 0 0 7px"
                                            },
                                            children: Object(E.jsxs)("svg", {
                                                className: "icon-exit",
                                                viewBox: "0 0 32 32",
                                                fill: "#fff",
                                                children: [Object(E.jsx)("path", {
                                                    d: "M15.947 29.289h-11.96c-0.734 0-1.329-0.595-1.329-1.329v-23.92c0-0.734 0.595-1.329 1.329-1.329h11.96c0.735 0 1.329-0.594 1.329-1.329s-0.594-1.329-1.329-1.329h-11.96c-2.198 0-3.987 1.789-3.987 3.987v23.92c0 2.198 1.789 3.987 3.987 3.987h11.96c0.735 0 1.329-0.594 1.329-1.329s-0.594-1.329-1.329-1.329z"
                                                }), Object(E.jsx)("path", {
                                                    d: "M31.605 15.054l-8.080-7.973c-0.521-0.516-1.363-0.509-1.879 0.013s-0.51 1.363 0.013 1.879l5.774 5.698h-15.473c-0.735 0-1.329 0.594-1.329 1.329s0.594 1.329 1.329 1.329h15.473l-5.774 5.698c-0.523 0.516-0.527 1.357-0.013 1.879 0.26 0.263 0.603 0.396 0.946 0.396 0.338 0 0.675-0.128 0.933-0.383l8.080-7.973c0.252-0.25 0.396-0.59 0.396-0.946s-0.142-0.695-0.396-0.946z"
                                                })]
                                            })
                                        })]
                                    }) : Object(E.jsx)("button", {
                                        onClick: function () {
                                            return L("wallet")
                                        },
                                        className: "nav-link link text-black display-7 connect Click-here",
                                        style: {
                                            padding: "8px 30px !important"
                                        },
                                        children: "Connect"
                                    })
                                })]
                            }), Object(E.jsx)("div", {
                                className: "home-stats",
                                children: Object(E.jsxs)("div", {
                                    className: "row",
                                    children: [Object(E.jsxs)("div", {
                                        className: "col-md-7 mt-5",
                                        children: [Object(E.jsx)("h2", {
                                            className: "chakra-heading css-1xqpn67",
                                            children: "Stake Your Currency & Earn up to 14.6% Daily"
                                        }), Object(E.jsx)("p", {
                                            style: {
                                                fontSize: "20px",
                                                color: "white",
                                                margin: "20px 0 28px 0"
                                            },
                                            children: "Daily 12.6% - 14.6% return on your investment up to 252%"
                                        }), Object(E.jsx)("div", {
                                            className: "",
                                            style: {
                                                margintop: "24px"
                                            },
                                            children: Object(E.jsx)("div", {
                                                className: "d-flex flex-wrap welcome-networks",
                                                style: {
                                                    gap: "20px"
                                                },
                                                children: Object.values(T).map((function (e, t) {
                                                    return Object(E.jsx)("div", {
                                                        children: Object(E.jsxs)("button", {
                                                            onClick: function () {
                                                                F(e.title)
                                                            },
                                                            className: "home-network-btn ".concat(q.title === e.title ? q.title + " op " : ""),
                                                            children: [Object(E.jsx)("img", {
                                                                src: "assets/images/".concat(e.logoname),
                                                                alt: "MultiFury"
                                                            }), Object(E.jsx)("span", {
                                                                children: (e.title == "ats" || e.title == "ape" ? "APE" : e.unit)
                                                            })]
                                                        })
                                                    }, t)
                                                }))
                                            })
                                        })]
                                    }), Object(E.jsxs)("div", {
                                        className: "col-md-5 mt-5",
                                        children: [Object(E.jsxs)("div", {
                                            className: "chakra-text css-1y5136",
                                            style: {
                                                display: "flex"
                                            },
                                            children: [Object(E.jsx)("div", {
                                                className: "",
                                                children: q.explorerlink ? q.explorerlink.map((function (e, t) {
                                                    return Object(E.jsx)("a", {
                                                        href: e,
                                                        className: "links",
                                                        target: "_blank",
                                                        rel: "noreferrer",
                                                        children: "Contract"
                                                    }, t)
                                                })) : null
                                            }), Object(E.jsx)("div", {
                                                className: "",
                                                children: Object(E.jsx)("a", {
                                                    href: "http://auditwhale.io/images/audit-reports/pdf/multiearns.pdf",
                                                    className: "links",
                                                    target: "_blank",
                                                    children: "Audit"
                                                })
                                            }), Object(E.jsx)("div", {
                                                className: "",
                                                children: Object(E.jsx)("a", {
                                                    target: "_blank",
                                                    href: "https://medium.com/@boycottsamuel7/multiearns-com-earn-up-to-14-5-daily-by-staking-bnb-matic-fantom-cronos-avax-tt-tokens-73c3a98f1529",
                                                    className: "links",
                                                    children: "Medium"
                                                })
                                            }), Object(E.jsx)("div", {
                                                className: "",
                                                children: Object(E.jsx)("a", {
                                                    href: "https://t.me/multiearns",
                                                    className: "links",
                                                    target: "_blank",
                                                    children: "Telegram"
                                                })
                                            })]
                                        }), Object(E.jsx)("div", {
                                            className: "css-1o6ckf3",
                                            children: Object(E.jsxs)("div", {
                                                role: "group",
                                                className: "css-srbryi_1",
                                                children: [Object(E.jsx)("p", {
                                                    className: "chakra-text css-qqfgvy",
                                                    children: "Total Staked Balance"
                                                }), Object(E.jsx)("div", {
                                                    className: "chakra-skeleton css-ahyunb",
                                                    children: Object(E.jsxs)("p", {
                                                        className: "chakra-text css-tzquvd", // TOTAL STAKE TEXT
                                                        children: [C(z, 4), " ", (q.title == "ats" || q.title == "ape") ? "APE" : q.unit]
                                                    })
                                                }), Object(E.jsx)("select", {
                                                    name: "cars",
                                                    id: "cars",
                                                    className: "input-deposit-amount-stake",
                                                    value: q.title,
                                                    onChange: function (e) {
                                                        console.log(e.target.selectedOptions[0].value), console.log(e.target.value), F(e.target.value)
                                                    },
                                                    children: Object.values(T).map((function (e, t) {
                                                        return Object(E.jsxs)("option", {
                                                            value: e.title,
                                                            children: [((e.title == "ats" || e.title == "ape") ? "APE" : e.unit), " (", e.blockchain, ")"]
                                                        }, t)
                                                    }))
                                                })]
                                            })
                                        })]
                                    })]
                                })
                            }), (q.blockchain != "Ethereum" && q.blockchain != "Ropsten") ?
                                [Object(E.jsx)("h2", {
                                    style: {
                                        // visibility: "hidden",
                                        color: "white",
                                        margin: "100px 0 20px 0"
                                    },
                                    children: "Standard Plans"
                                }), Object(E.jsxs)("div", {
                                    // style: { visibility: "hidden" },
                                    className: "css-orfn9f",
                                    children: [Object(E.jsxs)("div", {
                                        role: "group",
                                        className: "css-srbryi_2",
                                        children: [Object(E.jsx)("div", {
                                            className: "css-gg4vpm",
                                            children: Object(E.jsx)("p", {
                                                className: "chakra-text css-1u2ov44",
                                                children: "Tier-1"
                                            })
                                        }), Object(E.jsxs)("div", {
                                            className: "css-gg4vpm",
                                            children: [Object(E.jsxs)("div", {
                                                className: "css-13brihr",
                                                children: [Object(E.jsx)("p", {
                                                    className: "chakra-text css-qqfgvy",
                                                    children: "Daily Earnings"
                                                }), Object(E.jsx)("p", {
                                                    className: "chakra-text css-tzquvd",
                                                    children: "14.6 %"
                                                })]
                                            }), Object(E.jsxs)("div", {
                                                className: "css-13brihr",
                                                children: [Object(E.jsx)("p", {
                                                    className: "chakra-text css-qqfgvy",
                                                    children: "Total ROI"
                                                }), Object(E.jsx)("p", {
                                                    className: "chakra-text css-tzquvd",
                                                    children: "146 %"
                                                })]
                                            })]
                                        }), Object(E.jsx)("div", {
                                            className: "css-63fv6b",
                                            children: Object(E.jsx)("div", {
                                                className: "css-bkt4b9",
                                                children: Object(E.jsxs)("div", {
                                                    className: "css-0",
                                                    children: [Object(E.jsx)("p", {
                                                        className: "chakra-text css-i3jkqk",
                                                        children: "10"
                                                    }), Object(E.jsx)("p", {
                                                        className: "chakra-text css-itvw0n",
                                                        children: "Days"
                                                    })]
                                                })
                                            })
                                        }), Object(E.jsxs)("div", {
                                            className: "css-1u3t2t5",
                                            children: [Object(E.jsxs)("div", {
                                                className: "css-18iu6yg",
                                                children: [Object(E.jsx)("p", {
                                                    className: "chakra-text css-npkoxh",
                                                    children: "Enter Amount "
                                                }), Object(E.jsxs)("div", {
                                                    className: "chakra-input__group css-1t5oxgh",
                                                    children: [Object(E.jsx)("div", {
                                                        className: "chakra-input__left-addon css-qfq9qr",
                                                        children: Object(E.jsx)("img", {
                                                            className: "chakra-image css-19gc7lg",
                                                            src: "assets/images/".concat(q.logoname)
                                                        })
                                                    }), Object(E.jsx)("input", {
                                                        type: "text",
                                                        placeholder: "0.1",
                                                        className: "chakra-input css-wd5i6n",
                                                        onChange: function (e) {
                                                            return i(e.target.value)
                                                        }
                                                    })]
                                                })]
                                            }), Object(E.jsxs)("div", {
                                                className: "css-13brihr",
                                                children: [Object(E.jsx)("p", {
                                                    className: "chakra-text css-itvw0n",
                                                    children: "ROI in 10 Days"
                                                }), Object(E.jsx)("p", {
                                                    className: "chakra-text css-i3jkqk",
                                                    children: 10 * r * 146 / 1e3
                                                })]
                                            })]
                                        }), Object(E.jsxs)("button", {
                                            disabled: "",
                                            type: "submit",
                                            className: "chakra-button css-taj3dd",
                                            onClick: H,
                                            children: "Invest"
                                        })]
                                    }), Object(E.jsxs)("div", {
                                        role: "group",
                                        className: "css-srbryi_3",
                                        children: [Object(E.jsx)("div", {
                                            className: "css-gg4vpm",
                                            children: Object(E.jsx)("p", {
                                                className: "chakra-text css-1u2ov44",
                                                children: "Tier-2"
                                            })
                                        }), Object(E.jsxs)("div", {
                                            className: "css-gg4vpm",
                                            children: [Object(E.jsxs)("div", {
                                                className: "css-13brihr",
                                                children: [Object(E.jsx)("p", {
                                                    className: "chakra-text css-qqfgvy",
                                                    children: "Daily Earnings"
                                                }), Object(E.jsx)("p", {
                                                    className: "chakra-text css-tzquvd",
                                                    children: "13.6 %"
                                                })]
                                            }), Object(E.jsxs)("div", {
                                                className: "css-13brihr",
                                                children: [Object(E.jsx)("p", {
                                                    className: "chakra-text css-qqfgvy",
                                                    children: "Total ROI"
                                                }), Object(E.jsx)("p", {
                                                    className: "chakra-text css-tzquvd",
                                                    children: "204 %"
                                                })]
                                            })]
                                        }), Object(E.jsx)("div", {
                                            className: "css-63fv6b",
                                            children: Object(E.jsx)("div", {
                                                className: "css-bkt4b9",
                                                children: Object(E.jsxs)("div", {
                                                    className: "css-0",
                                                    children: [Object(E.jsx)("p", {
                                                        className: "chakra-text css-i3jkqk",
                                                        children: "15"
                                                    }), Object(E.jsx)("p", {
                                                        className: "chakra-text css-itvw0n",
                                                        children: "Days"
                                                    })]
                                                })
                                            })
                                        }), Object(E.jsxs)("div", {
                                            className: "css-1u3t2t5",
                                            children: [Object(E.jsxs)("div", {
                                                className: "css-18iu6yg",
                                                children: [Object(E.jsx)("p", {
                                                    className: "chakra-text css-npkoxh",
                                                    children: "Enter Amount "
                                                }), Object(E.jsxs)("div", {
                                                    className: "chakra-input__group css-1t5oxgh",
                                                    children: [Object(E.jsx)("div", {
                                                        className: "chakra-input__left-addon css-qfq9qr",
                                                        children: Object(E.jsx)("img", {
                                                            className: "chakra-image css-19gc7lg",
                                                            src: "assets/images/".concat(q.logoname)
                                                        })
                                                    }), Object(E.jsx)("input", {
                                                        type: "text",
                                                        placeholder: "0.1",
                                                        className: "chakra-input css-wd5i6n",
                                                        onChange: function (e) {
                                                            return d(e.target.value)
                                                        }
                                                    })]
                                                })]
                                            }), Object(E.jsxs)("div", {
                                                className: "css-13brihr",
                                                children: [Object(E.jsx)("p", {
                                                    className: "chakra-text css-itvw0n",
                                                    children: "ROI in 15 Days"
                                                }), Object(E.jsx)("p", {
                                                    className: "chakra-text css-i3jkqk",
                                                    children: 15 * u * 136 / 1e3
                                                })]
                                            })]
                                        }), Object(E.jsxs)("button", {
                                            disabled: "",
                                            type: "submit",
                                            className: "chakra-button css-taj3dd",
                                            onClick: K,
                                            children: "Invest"
                                        })]
                                    }), Object(E.jsxs)("div", {
                                        role: "group",
                                        className: "css-srbryi_4",
                                        children: [Object(E.jsx)("div", {
                                            className: "css-gg4vpm",
                                            children: Object(E.jsx)("p", {
                                                className: "chakra-text css-1u2ov44",
                                                children: "Tier-3"
                                            })
                                        }), Object(E.jsxs)("div", {
                                            className: "css-gg4vpm",
                                            children: [Object(E.jsxs)("div", {
                                                className: "css-13brihr",
                                                children: [Object(E.jsx)("p", {
                                                    className: "chakra-text css-qqfgvy",
                                                    children: "Daily Earnings"
                                                }), Object(E.jsx)("p", {
                                                    className: "chakra-text css-tzquvd",
                                                    children: "12.6"
                                                })]
                                            }), Object(E.jsxs)("div", {
                                                className: "css-13brihr",
                                                children: [Object(E.jsx)("p", {
                                                    className: "chakra-text css-qqfgvy",
                                                    children: "Total ROI"
                                                }), Object(E.jsx)("p", {
                                                    className: "chakra-text css-tzquvd",
                                                    children: "252 %"
                                                })]
                                            })]
                                        }), Object(E.jsx)("div", {
                                            className: "css-63fv6b",
                                            children: Object(E.jsx)("div", {
                                                className: "css-bkt4b9",
                                                children: Object(E.jsxs)("div", {
                                                    className: "css-0",
                                                    children: [Object(E.jsx)("p", {
                                                        className: "chakra-text css-i3jkqk",
                                                        children: "20"
                                                    }), Object(E.jsx)("p", {
                                                        className: "chakra-text css-itvw0n",
                                                        children: "Days"
                                                    })]
                                                })
                                            })
                                        }), Object(E.jsxs)("div", {
                                            className: "css-1u3t2t5",
                                            children: [Object(E.jsxs)("div", {
                                                className: "css-18iu6yg",
                                                children: [Object(E.jsx)("p", {
                                                    className: "chakra-text css-npkoxh",
                                                    children: "Enter Amount "
                                                }), Object(E.jsxs)("div", {
                                                    className: "chakra-input__group css-1t5oxgh",
                                                    children: [Object(E.jsx)("div", {
                                                        className: "chakra-input__left-addon css-qfq9qr",
                                                        children: Object(E.jsx)("img", {
                                                            className: "chakra-image css-19gc7lg",
                                                            src: "assets/images/".concat(q.logoname)
                                                        })
                                                    }), Object(E.jsx)("input", {
                                                        type: "text",
                                                        placeholder: "0.1",
                                                        className: "chakra-input css-wd5i6n",
                                                        onChange: function (e) {
                                                            return f(e.target.value)
                                                        }
                                                    })]
                                                })]
                                            }), Object(E.jsxs)("div", {
                                                className: "css-13brihr",
                                                children: [Object(E.jsx)("p", {
                                                    className: "chakra-text css-itvw0n",
                                                    children: "ROI in 20 Days"
                                                }), Object(E.jsx)("p", {
                                                    className: "chakra-text css-i3jkqk",
                                                    children: 20 * x * 126 / 1e3
                                                })]
                                            })]
                                        }), Object(E.jsxs)("button", {
                                            disabled: "",
                                            type: "submit",
                                            className: "chakra-button css-taj3dd",
                                            onClick: J,
                                            children: "Invest"
                                        })]
                                    })]
                                })
                                ] : [
                                    // display nothing
                                ],
                            Object(E.jsx)("h2", {
                                style: {
                                    color: "white",
                                    margin: "100px 0 20px 0"
                                },
                                children: "Premium Plans"
                            }), Object(E.jsxs)("div", {
                                className: "css-orfn9f",
                                children: [Object(E.jsxs)("div", {
                                    role: "group",
                                    className: "css-srbryi_5",
                                    children: [Object(E.jsx)("div", {
                                        className: "css-gg4vpm",
                                        children: Object(E.jsx)("p", {
                                            className: "chakra-text css-1u2ov44",
                                            children: "Gold"
                                        })
                                    }), Object(E.jsxs)("div", {
                                        className: "css-gg4vpm",
                                        children: [Object(E.jsxs)("div", {
                                            className: "css-13brihr",
                                            children: [Object(E.jsx)("p", {
                                                className: "chakra-text css-qqfgvy",
                                                children: "Daily Earnings"
                                            }), Object(E.jsx)("p", {
                                                className: "chakra-text css-tzquvd",
                                                children: "14.6"
                                            })]
                                        }), Object(E.jsxs)("div", {
                                            className: "css-13brihr",
                                            children: [Object(E.jsx)("p", {
                                                className: "chakra-text css-qqfgvy",
                                                children: "Total ROI"
                                            }), Object(E.jsx)("p", {
                                                className: "chakra-text css-tzquvd",
                                                children: "299.55 %"
                                            })]
                                        })]
                                    }), Object(E.jsx)("div", {
                                        className: "css-63fv6b",
                                        children: Object(E.jsx)("div", {
                                            className: "css-bkt4b9",
                                            children: Object(E.jsxs)("div", {
                                                className: "css-0",
                                                children: [Object(E.jsx)("p", {
                                                    className: "chakra-text css-i3jkqk",
                                                    children: "10"
                                                }), Object(E.jsx)("p", {
                                                    className: "chakra-text css-itvw0n",
                                                    children: "Days"
                                                })]
                                            })
                                        })
                                    }), Object(E.jsxs)("div", {
                                        className: "css-1u3t2t5",
                                        children: [Object(E.jsxs)("div", {
                                            className: "css-18iu6yg",
                                            children: [Object(E.jsx)("p", {
                                                className: "chakra-text css-npkoxh",
                                                children: "Enter Amount "
                                            }), Object(E.jsxs)("div", {
                                                className: "chakra-input__group css-1t5oxgh",
                                                children: [Object(E.jsx)("div", {
                                                    className: "chakra-input__left-addon css-qfq9qr",
                                                    children: Object(E.jsx)("img", {
                                                        className: "chakra-image css-19gc7lg",
                                                        src: "assets/images/".concat(q.logoname)
                                                    })
                                                }), Object(E.jsx)("input", {
                                                    type: "text",
                                                    placeholder: "0.1",
                                                    className: "chakra-input css-wd5i6n",
                                                    onChange: function (e) {
                                                        return k(e.target.value)
                                                    }
                                                })]
                                            })]
                                        }), Object(E.jsxs)("div", {
                                            className: "css-13brihr",
                                            children: [Object(E.jsx)("p", {
                                                className: "chakra-text css-itvw0n",
                                                children: "ROI in 10 Days"
                                            }), Object(E.jsx)("p", {
                                                className: "chakra-text css-i3jkqk",
                                                children: 10 * O * 146 / 1e3
                                            })]
                                        })]
                                    }), Object(E.jsxs)("button", {
                                        disabled: "",
                                        type: "submit",
                                        className: "chakra-button css-taj3dd",
                                        onClick: V,
                                        children: "Invest"
                                    })]
                                }), Object(E.jsxs)("div", {
                                    role: "group",
                                    className: "css-srbryi_6",
                                    children: [Object(E.jsx)("div", {
                                        className: "css-gg4vpm",
                                        children: Object(E.jsx)("p", {
                                            className: "chakra-text css-1u2ov44",
                                            children: "Platinum"
                                        })
                                    }), Object(E.jsxs)("div", {
                                        className: "css-gg4vpm",
                                        children: [Object(E.jsxs)("div", {
                                            className: "css-13brihr",
                                            children: [Object(E.jsx)("p", {
                                                className: "chakra-text css-qqfgvy",
                                                children: "Daily Earnings"
                                            }), Object(E.jsx)("p", {
                                                className: "chakra-text css-tzquvd",
                                                children: "13.6 %"
                                            })]
                                        }), Object(E.jsxs)("div", {
                                            className: "css-13brihr",
                                            children: [Object(E.jsx)("p", {
                                                className: "chakra-text css-qqfgvy",
                                                children: "Total ROI"
                                            }), Object(E.jsx)("p", {
                                                className: "chakra-text css-tzquvd",
                                                children: "598.78 %"
                                            })]
                                        })]
                                    }), Object(E.jsx)("div", {
                                        className: "css-63fv6b",
                                        children: Object(E.jsx)("div", {
                                            className: "css-bkt4b9",
                                            children: Object(E.jsxs)("div", {
                                                className: "css-0",
                                                children: [Object(E.jsx)("p", {
                                                    className: "chakra-text css-i3jkqk",
                                                    children: "15"
                                                }), Object(E.jsx)("p", {
                                                    className: "chakra-text css-itvw0n",
                                                    children: "Days"
                                                })]
                                            })
                                        })
                                    }), Object(E.jsxs)("div", {
                                        className: "css-1u3t2t5",
                                        children: [Object(E.jsxs)("div", {
                                            className: "css-18iu6yg",
                                            children: [Object(E.jsx)("p", {
                                                className: "chakra-text css-npkoxh",
                                                children: "Enter Amount "
                                            }), Object(E.jsxs)("div", {
                                                className: "chakra-input__group css-1t5oxgh",
                                                children: [Object(E.jsx)("div", {
                                                    className: "chakra-input__left-addon css-qfq9qr",
                                                    children: Object(E.jsx)("img", {
                                                        className: "chakra-image css-19gc7lg",
                                                        src: "assets/images/".concat(q.logoname)
                                                    })
                                                }), Object(E.jsx)("input", {
                                                    type: "text",
                                                    placeholder: "0.1",
                                                    className: "chakra-input css-wd5i6n",
                                                    onChange: function (e) {
                                                        return S(e.target.value)
                                                    }
                                                })]
                                            })]
                                        }), Object(E.jsxs)("div", {
                                            className: "css-13brihr",
                                            children: [Object(E.jsx)("p", {
                                                className: "chakra-text css-itvw0n",
                                                children: "ROI in 15 Days"
                                            }), Object(E.jsx)("p", {
                                                className: "chakra-text css-i3jkqk",
                                                children: 15 * N * 136 / 1e3
                                            })]
                                        })]
                                    }), Object(E.jsxs)("button", {
                                        disabled: "",
                                        type: "submit",
                                        className: "chakra-button css-taj3dd",
                                        onClick: Y,
                                        children: "Invest"
                                    })]
                                }), Object(E.jsxs)("div", {
                                    role: "group",
                                    className: "css-srbryi_7",
                                    children: [Object(E.jsx)("div", {
                                        className: "css-gg4vpm",
                                        children: Object(E.jsx)("p", {
                                            className: "chakra-text css-1u2ov44",
                                            children: "Diamond"
                                        })
                                    }), Object(E.jsxs)("div", {
                                        className: "css-gg4vpm",
                                        children: [Object(E.jsxs)("div", {
                                            className: "css-13brihr",
                                            children: [Object(E.jsx)("p", {
                                                className: "chakra-text css-qqfgvy",
                                                children: "Daily Earnings"
                                            }), Object(E.jsx)("p", {
                                                className: "chakra-text css-tzquvd",
                                                children: "12.6"
                                            })]
                                        }), Object(E.jsxs)("div", {
                                            className: "css-13brihr",
                                            children: [Object(E.jsx)("p", {
                                                className: "chakra-text css-qqfgvy",
                                                children: "Total ROI"
                                            }), Object(E.jsx)("p", {
                                                className: "chakra-text css-tzquvd",
                                                children: "1016.77 %"
                                            })]
                                        })]
                                    }), Object(E.jsx)("div", {
                                        className: "css-63fv6b",
                                        children: Object(E.jsx)("div", {
                                            className: "css-bkt4b9",
                                            children: Object(E.jsxs)("div", {
                                                className: "css-0",
                                                children: [Object(E.jsx)("p", {
                                                    className: "chakra-text css-i3jkqk",
                                                    children: "20"
                                                }), Object(E.jsx)("p", {
                                                    className: "chakra-text css-itvw0n",
                                                    children: "Days"
                                                })]
                                            })
                                        })
                                    }), Object(E.jsxs)("div", {
                                        className: "css-1u3t2t5",
                                        children: [Object(E.jsxs)("div", {
                                            className: "css-18iu6yg",
                                            children: [Object(E.jsx)("p", {
                                                className: "chakra-text css-npkoxh",
                                                children: "Enter Amount "
                                            }), Object(E.jsxs)("div", {
                                                className: "chakra-input__group css-1t5oxgh",
                                                children: [Object(E.jsx)("div", {
                                                    className: "chakra-input__left-addon css-qfq9qr",
                                                    children: Object(E.jsx)("img", {
                                                        className: "chakra-image css-19gc7lg",
                                                        src: "assets/images/".concat(q.logoname)
                                                    })
                                                }), Object(E.jsx)("input", {
                                                    type: "text",
                                                    placeholder: "0.1",
                                                    className: "chakra-input css-wd5i6n",
                                                    onChange: function (e) {
                                                        return D(e.target.value)
                                                    }
                                                })]
                                            })]
                                        }), Object(E.jsxs)("div", {
                                            className: "css-13brihr",
                                            children: [Object(E.jsx)("p", {
                                                className: "chakra-text css-itvw0n",
                                                children: "ROI in 20 Days"
                                            }), Object(E.jsx)("p", {
                                                className: "chakra-text css-i3jkqk",
                                                children: 20 * A * 126 / 1e3
                                            })]
                                        })]
                                    }), Object(E.jsxs)("button", {
                                        disabled: "",
                                        type: "submit",
                                        className: "chakra-button css-taj3dd",
                                        onClick: X,
                                        children: "Invest"
                                    })]
                                })]
                            })]
                        })
                    })
                },
                F = function () {
                    return Object(E.jsxs)(E.Fragment, {
                        children: [Object(E.jsx)(B, {}), Object(E.jsx)(U, {})]
                    })
                },
                L = function () {
                    return Object(a.useEffect)((function () {
                        if (window.location.href.includes("?ref=")) {
                            var e = function (e) {
                                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : window.location.href;
                                e = e.replace(/[\[\]]/g, "\\$&");
                                var n = new RegExp("[?&]" + e + "(=([^&#]*)|&|#|$)").exec(t);
                                return n ? n[2] ? decodeURIComponent(n[2].replace(/\+/g, " ")) : "" : null
                            }("ref"),
                                t = e;
                            localStorage.setItem("baseRef", t)
                        }
                    }), []), Object(E.jsx)(E.Fragment, {
                        children: Object(E.jsx)(r.a, {
                            children: Object(E.jsx)(i.c, {
                                children: Object(E.jsx)(i.a, {
                                    path: "/",
                                    exact: !0,
                                    component: F
                                })
                            })
                        })
                    })
                },
                z = Object(a.createContext)({
                    showModal: function () { },
                    hideModal: function () { }
                }),
                H = function (e) {
                    var t = Object(a.useState)(!1),
                        n = Object(b.a)(t, 2),
                        s = n[0],
                        c = n[1],
                        r = {
                            isHistoryModalOpen: s,
                            showModal: function () {
                                c(!0)
                            },
                            hideModal: function () {
                                c(!1)
                            }
                        };
                    return Object(E.jsx)(z.Provider, {
                        value: r,
                        children: e.children
                    })
                };
            n(908);
            c.a.render(Object(E.jsx)(q, {
                children: Object(E.jsxs)(H, {
                    children: [Object(E.jsx)(L, {}), Object(E.jsx)(u.a, {})]
                })
            }), document.getElementById("root"))
        }
    },
    [
        [909, 1, 2]
    ]
]);
//# sourceMappingURL=main.e70f7ecd.chunk.js.map