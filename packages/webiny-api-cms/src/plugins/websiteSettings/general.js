// @flow
import { Model } from "webiny-model";

class FileModel extends Model {
    name: string;
    size: number;
    src: string;
    type: string;
    constructor() {
        super();
        this.attr("name").char();
        this.attr("size").integer();
        this.attr("src").char();
        this.attr("type").char();
    }
}

class GeneralSettings extends Model {
    constructor() {
        super();
        this.attr("name").char();
        this.attr("favicon").model(FileModel);
        this.attr("logo").model(FileModel);
    }
}

export default [
    {
        name: "cms-website-settings-general",
        type: "cms-website-settings-model",
        apply({ model }: Object) {
            model.attr("general").model(GeneralSettings);
        }
    },
    {
        name: "cms-schema-settings-general",
        type: "cms-schema",
        typeDefs: `
            type WebsiteGeneralSettings {
                name: String
                favicon: File
                logo: File
            } 
            
            extend type WebsiteSettings {
                general: WebsiteGeneralSettings
            }
        `
    }
];
