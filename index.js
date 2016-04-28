var hasProcess = typeof process === 'object',
    hasWindow = typeof window !== 'undefined';

module.exports = getArgs;

/*
git remote add origin https://github.com/hollowdoor/get_command_args.git
git push -u origin master
*/

function getArgs(){

    var params, args = [], wasFlag, posIndex;
    if(!hasWindow && hasProcess){
        params = process.argv.slice(2);

        if(!params.length) return [];

        if((posIndex = params.indexOf('--')) !== -1){
            return params.slice(posIndex + 1);
        }

        for(var i=0; i<params.length; i++){

            if(isFlag(params[i])){
                wasFlag = params[i];
                if(hasEqual(params[i])){
                    if(i+1 < params.length - 1 && !isFlag(params[i+1])){
                        i++;
                        args.push(toJSValue(params[i]));
                        wasFlag = false;
                    }
                }
            }else{

                if(!wasFlag){
                    args.push(toJSValue(params[i]));
                }
                wasFlag = false;
            }
        }

        return args;
    }else if(hasWindow){
        return window.location.pathname.split('/');
    }

    return [];
}

function isFlag(flag){
    return /^-[^-]/.test(flag) || /^--[^-][^-]+/.test(flag);
}

function hasEqual(flag){
    return /[^=]+=[^=]+/.test(flag);
}

function toJSValue(value){
    if(value === 'true'){
        return true;
    }else if(value === 'false'){
        return false;
    }else if(!isNaN(value)){
        if(/\./.test(value)){
            return parseFloat(value);
        }else{
            return parseInt(value);
        }
    }

    return value;
}
